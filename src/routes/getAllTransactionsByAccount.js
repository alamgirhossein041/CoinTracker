const request = require('request');
const coinbaseApi = require('../api/coinbaseApi');
// DOGE Account
// http://localhost:3000/transactions/ea4a1d03-20a1-52c5-9431-7a734c415329
module.exports = (app) => {
    app.get('/transactions/:account_id', (req, res) => {
        const account_id = req.params.account_id;
        // const id_account = req.params.id_account;
        console.log('L8', account_id);
        try {
            const promise = new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest('/v2/accounts/' + account_id + '/transactions');
                request(options, function(error, response) {
                    if (error) {
                        console.log('error:', error);
                        reject(error);
                    }
                    if (response.statusCode == 200) {
                        // console.log(response.body.data);
                        let data = JSON.parse(response.body);
                        console.log('data', data);
                        resolve(data);

                    }
                })
            });
            promise.then(function(data) {
                console.log(data);
                // res.json({
                //     data: data,

                //     message: "Les transactions sont biens la"
                // });
            }).catch(function(err) {
                console.log(err);
            });



        } catch (error) {
            console.log(error);
        }



    });
}