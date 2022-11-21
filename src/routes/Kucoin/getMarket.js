const config = require('../../../secret.json');

const api = require('kucoin-node-api')

const conf = {
  apiKey: config.kucoin.api_key,
  secretKey: config.kucoin.api_secret,
  passphrase: config.kucoin.pass_phrase,
  environment: 'live'
}



module.exports = (app) => {
  app.get('/kucoin/market', async (req, res) => {

    api.init(conf);
    // console.log(conf)
    async function getMarket() {
      console.log('getMarket kucoin');
      try {
        let r = await api.get24hrStats('ETH-USDT');
        console.log(r.data)
        res.json(r);

      } catch (err) {
        console.log(err)
      }
    }
    getMarket();
  }
  )
}



