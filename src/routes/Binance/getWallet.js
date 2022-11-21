const config = require('../../../secret.json');

const { Spot } = require('@binance/connector');

const apiKey = config.binance.api_key;
const apiSecret = config.binance.api_secret;


module.exports = (app) => {
  app.get('/binance/wallet', async (req, res) => {

    try {
      const client = new Spot(apiKey, apiSecret)
      // Get account information
      client.account().then(response => {
        // console.log(response.data)
        const data = response.data.balances;

        let filtred = data.filter(element => parseFloat(element.free) > 0 || parseFloat(element.locked) > 0)

        // MergeEarn and Spot value 
        filtred.map(element => {

          element.asset = element.asset;
          if (element.asset !== 'LDO') {
            if (element.asset.indexOf('LD') > -1) {
              element.asset = element.asset.slice(2);
            } else {
              element.asset = element.asset;
            }
          }
        })


        const agregateWallet = (wallet) => {
          ;
          let result = [];

          wallet.forEach(function (element) {
            if (!this[element.asset]) {
              this[element.asset] = {

                currency: element.asset,
                balance: 0,
                locked: 0
              };

              result.push(this[element.asset]);
            }
            this[element.asset].balance += parseFloat(element.free);
            this[element.asset].locked += parseFloat(element.locked);
          }, Object.create(null));
          return result;
        }


        filtred = agregateWallet(filtred);


        res.json(filtred);

      })

    } catch (error) {
      console.log('error : ', error);
      res.json({ error });
    }

  }
  )
}


