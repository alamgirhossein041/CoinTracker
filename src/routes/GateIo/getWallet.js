
const config = require('../../../secret.json');

module.exports = (app) => {
    app.get('/gateio-wallet', async (req, res) => {

        try {
            const GateApi = require('gate-api');

            const client = new GateApi.ApiClient();

            client.setApiKeySecret(config.GateIo.api_key, config.GateIo.api_secret);

            // uncomment the next line to change base path
            // client.basePath = "https://some-other-host"
            // Configure Gate APIv4 key authentication:
            
            const api = new GateApi.SpotApi(client);

            // console.log('API data: ', api)
            const opts = {
            //   'currency': "FITFI" // string | Retrieve data of the specified currency
                
            };
            api.listSpotAccounts(opts)
            .then(value => {
                        console.log('API called successfully. Returned data: ', value.body)
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


