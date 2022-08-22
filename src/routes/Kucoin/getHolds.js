// 6256756167f2b0000134f23c id solana wallet 

const config = require('../../../secret.json');

const api = require('kucoin-node-api')

const conf = {
    apiKey: config.kucoin.api_key,
    secretKey: config.kucoin.api_secret,
    passphrase: config.kucoin.pass_phrase,
    environment: 'live'
}

module.exports = (app) => {
    app.get('/kucoin/hold', async (req, res) => {

        // const idaccount = req.params.idaccount;

        api.init(conf);
        // console.log(conf)
        async function getHodls() {
            console.log('getAccounts');
            try {
                params = {
                    // id: '6256756167f2b0000134f23c'
                    status:  'active',
                    side:  'buy' || 'sell',
                    type: 'limit' || 'limit_stop' || 'market_stop'
                  }
                let r = await api.getMarginAccount();
                // console.log(r.data)
                let data = r;
                // Filter only the accounts with totalBalance > 0
                // let filtred = data.filter(account => {
                //     if (account.totalBalance == 0) {
                //         return account;
                //     }
                // }
                // )
               
                res.json({ data });
            } catch (err) {
                console.log(err)
                res.json({ err });
            }
        }
        getHodls();

      
    }
    )
}



