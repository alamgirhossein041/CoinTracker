const crypto = require('crypto');
const request = require('request');

const builOptionsRequest = (path) => {

    const apiKey = 'nX38HCWSckkNrN8m';
    const apiSecret = 'NMkK0JhvW8pNCkJw75FrHUcsDSRYMRiJ';
    const timestamp = Math.floor(Date.now() / 1000);
    const req = {
        method: 'GET',
        path: path,
        body: ''
    };

    const message = timestamp + req.method + req.path + req.body;

    const signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

    const options = {
        baseUrl: 'https://api.coinbase.com/',
        url: req.path,
        method: req.method,
        headers: {
            'CB-ACCESS-SIGN': signature,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-KEY': apiKey,
            'CB-VERSION': '2021-06-23'
        }
    };
    return options;
}

const checkIfAccountHaveTransaction = async(token) => {
    // Check if tokens have transaction
    // For each Token verify by call API if there is a transaction
    // If there is a transaction, update the DB

    const options = builOptionsRequest('/v2/accounts/' + token
        .id_wallet + '/transactions');

    request(options, function(error, response) {
        if (error) {
            console.log('error:', error);
            return false;
        }
        if (response.statusCode == 200) {
            // let data = JSON.parse(response);
            return response;
        }
    })
}

const getTradeDetails = async(trade_id) => {

    // console.log(options);
    try {
        // request(options, function(error, response) {
        //     if (error) {
        //         console.log('error:', error);
        //         return error;
        //     }
        //     if (response.statusCode == 200) {
        //         // console.log(response.body.data);
        //         let data = JSON.parse(response.body);
        //         // console.log(data);
        //         return data;
        //     }
        //     })
        // } catch (error) {
        //     console.log(error);
        // }
        const promise = new Promise((resolve, reject) => {
            const options = builOptionsRequest('/v2/trades/' + trade_id);
            request(options, function(error, response) {
                if (error) {
                    console.log('error:', error);
                    reject(error);
                }
                if (response.statusCode == 200) {
                    // console.log(response.body.data);
                    let data = JSON.parse(response.body);
                    // console.log(data);
                    resolve(data);
                }
            })
        });
        promise.then(function(data) {
            // console.log(data);
            return data;
        }).catch(function(err) {
            console.log(err);
        });



    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    builOptionsRequest,
    checkIfAccountHaveTransaction,
    getTradeDetails
}