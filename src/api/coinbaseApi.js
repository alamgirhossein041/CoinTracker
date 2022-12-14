const crypto = require('crypto');
const request = require('request');
// require json file with api keys
const config = require('../../secret.json');

// console.log(config);

const builOptionsRequest = (path) => {
    // TO DO : recuperer les log du user en BDD
    const apiKey = config.coinbase.api_key;
    const apiSecret = config.coinbase.api_secret;
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


const builOptionsExchangeRequest = (path) => {

    const apiKey = config.coinbase.api_key;
    const apiSecret = config.coinbase.api_secret;
    const timestamp = Math.floor(Date.now() / 1000);
    const req = {
        method: 'GET',
        path: path,
        body: ''
    };

    const message = timestamp + req.method + req.path + req.body;

    const signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

    const options = {
        // baseUrl: 'https://api.coinbase.com/',
        url: req.path,
        method: req.method,
        headers: {
            'CB-ACCESS-SIGN': signature,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-KEY': apiKey,
            'CB-VERSION': '2021-06-23',
            'User-Agent': 'Olivier'
        }
    };
    return options;
}

const checkIfAccountHaveTransaction = async (token) => {

    const options = builOptionsRequest('/v2/accounts/' + token
        .id_wallet + '/transactions');

    request(options, function (error, response) {
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

const getTradeDetails = async (trade_id) => {

    // console.log(options);
    try {
        const promise = new Promise((resolve, reject) => {
            const options = builOptionsRequest('/v2/trades/' + trade_id);
            request(options, function (error, response) {
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
        promise.then(function (data) {
            // console.log(data);
            return data;
        }).catch(function (err) {
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }
}


const getPrice = async (code) => {
    return new Promise((resolve, reject) => {
        const options = builOptionsRequest('/v2/prices/' + code + '-USD/spot');
        request(options, function (error, response) {
            if (error) {
                console.log('error:', error);
                reject(error);
            }
            if (response.statusCode == 200) {
                // console.log(response.body.data);
                let data = JSON.parse(response.body);
                resolve(data);
            }
        })
    });
}

module.exports = {
    builOptionsRequest,
    checkIfAccountHaveTransaction,
    getTradeDetails,
    getPrice,
    builOptionsExchangeRequest
}