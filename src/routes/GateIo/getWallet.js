
const config = require('../../../secret.json');
const GateApi = require('gate-api');

module.exports = (app) => {
    app.get('/gateio/wallet', async (req, res) => {

        try {
        
            const client = new GateApi.ApiClient();
            client.setApiKeySecret(config.GateIo.api_key, config.GateIo.api_secret);
            
            const api = new GateApi.SpotApi(client);
            // console.log('API data: ', api)
            const opts = {
            }; 
           
            api.listSpotAccounts(opts)
            .then(value => {
                        console.log('API called successfully. Returned data: ', value.body)

                        // Get the current price of each currency
                        api.getCurrency('BTC')
                        .then(value => {
                            console.log('API getCurrency called successfully. Returned data: ', value.body)
                        })

                        res.json(value.body);
                    }
                    ).catch(error => {
                        console.error(error);
                        res.json({ error });
                    });

        } catch (error) {
            console.log('error : ', error);
            res.json({ error });
        }

    }
    )
}


