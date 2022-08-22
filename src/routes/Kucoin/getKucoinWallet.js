
const config = require('../../../secret.json');

const api = require('kucoin-node-api')

const conf = {
    apiKey: config.kucoin.api_key,
    secretKey: config.kucoin.api_secret,
    passphrase: config.kucoin.pass_phrase,
    environment: 'live'
}


module.exports = (app) => {
    app.get('/kucoin/wallet', async (req, res) => {

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

                // add current fiat price for each currency
                // console.log('filtred', filtred)
                // make an array with all the currencies
                let codes = filtred.map(account => {
                    return account.currency;
                })
                console.log('codes List', codes)

                let params = {
                    currencies: codes
                }
                let pricesKucoin = await api.getFiatPrice(params);
                // ()
                console.log('pricesKucoin', pricesKucoin.data)


                
                // Add Live Price to each account
                filtred.forEach(account => {
                    account.live_price = pricesKucoin.data[account.currency];
                }
                )

                res.json({ filtred });
            } catch (err) {
                console.log(err)
            }
        }
        getAccounts();

      
    }
    )
}



