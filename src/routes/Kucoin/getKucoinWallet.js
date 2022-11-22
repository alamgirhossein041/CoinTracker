
const config = require('../../../secret.json');

const api = require('kucoin-node-api')

const conf = {
    apiKey: config.kucoin.api_key,
    secretKey: config.kucoin.api_secret,
    passphrase: config.kucoin.pass_phrase,
    environment: 'live'
}

const agregateWallet = (wallet) => {
    ;
    let result = [];
    console.log('agregateWallet ', wallet);
    wallet.forEach(function (element) {
        if (!this[element.currency]) {
            this[element.currency] = {
                id: element.id,
                currency: element.currency,
                balance: 0,
                type: element.type,
                live_price: element.live_price,
                available: element.available,
                holds: element.holds,
                quoteAPIorigin: element.quoteAPIorigin
            };

            result.push(this[element.currency]);
        }
        this[element.currency].balance += parseFloat(element.balance);
    }, Object.create(null));
    return result;
}


module.exports = (app) => {
    app.get('/kucoin/wallet', async (req, res) => {

        api.init(conf);
        // console.log(conf)
        async function getAccounts() {
            console.log('getAccounts kucoin');
            try {
                let r = await api.getAccounts()
                console.log(r.data)
                let data = r.data;
                let filtred = data.filter(account => {
                    if (account.balance > 0) {
                        return account;
                    }
                }
                )

                // add current fiat price for each currency
                let codes = filtred.map(account => {
                    return account.currency;
                })

                let params = {
                    currencies: codes
                };

                let pricesKucoin = await api.getFiatPrice(params);


                // Add Live Price to each account + variation Market data
                for (let index = 0; index < filtred.length; index++) {
                    let currencies = '';
                    if (filtred[index].currency === 'ETH2') {
                        currencies = filtred[index].currency + '-ETH';

                    } else if (filtred[index].currency === 'USDT') {
                        currencies = filtred[index].currency + '-DAI';

                    } else {
                        currencies = filtred[index].currency + '-USDT';
                    }
                    let data = await api.get24hrStats(currencies);
                    // console.log('data API origin Kucoin' , data.data)
                    filtred[index].quoteAPIorigin = data.data;

                    filtred[index].live_price = parseFloat(pricesKucoin.data[filtred[index].currency]);

                }


                // agregate compte depot trade et earn  
                filtred = agregateWallet(filtred);

                res.json(filtred);

            } catch (err) {
                console.log(err)
            }
        }
        getAccounts();
    }
    )
}



