const request = require('request');
const coinbaseApi = require('../../api/coinbaseApi');



module.exports = (app) => {
    app.get('/coinbase/:account_id', (req, res) => {

        const accountId = req.params.account_id;

        const options = coinbaseApi.builOptionsExchangeRequest('https://api.exchange.coinbase.com/accounts/' + accountId);

        request(options, function (error, response) {
            if (error) {
                console.log('error:', error);
            }
            if (response) {
                console.log(response);
                let data = response.body;
                // json data
                let dataJson = JSON.parse(data);
                console.log(dataJson);
                res.json({ data: dataJson, message: "Les achats sont biens la" });
            }
        }
        )
       


    }
    )
}




