const coinbaseApi = require('../../api/coinbaseApi');

const request = require('request');

module.exports = (app) => {
    // console.clear();


    app.get('/coinbase/balance/:id_account', async(req, res) => {

        const id_account = req.params.id_account;
        let path = '/v2/accounts/' + id_account;
        const options = coinbaseApi.builOptionsRequest(path);
        // console.log(options);
        request(options, function(error, response) {
            if (error) {
                console.log('error:', error);
            }
            if (response) {
                let data = response.body;
                // json data
                let dataJson = JSON.parse(data);
                console.log(dataJson);
                res.json({ data: dataJson, message: "Les achats sont biens la" });
            }
        })

    });
}