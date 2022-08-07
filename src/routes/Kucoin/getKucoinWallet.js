
const KucoinApi = require('../../api/KucoinApi');
const config = require('../../../secret.json');

const api = require('kucoin-node-api')

const conf = {
    apiKey: config.kucoin.api_key,
    secretKey: config.kucoin.api_secret,
    passphrase: config.kucoin.pass_phrase,
    environment: 'live'
}


module.exports = (app) => {
    app.get('/kucoin-wallet', async (req, res) => {

        api.init(conf);
        // console.log(conf)
        async function getAccounts() {
            console.log('getAccounts');
            try {
                let r = await api.getAccounts()
                // console.log(r.data)
                let data = r.data;
              let filtred = data.filter(account => {
                    if (account.balance > 0) {
                       return account;
                    }
                }
                )

                res.json({ filtred });
            } catch (err) {
                console.log(err)
            }
        }
        getAccounts();
        // let data = await KucoinApi.makeRequest();

        // console.log('data : ',data);

        // // ask api for each token in the list to have balance 
    }
    )
}



