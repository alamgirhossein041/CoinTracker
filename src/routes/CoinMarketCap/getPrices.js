const CoinMarketCapApi = require('../../api/CoinMarketCapApi');
const config = require('../../../secret.json');

const axios = require('axios');

module.exports = (app) => {
  app.get('/cmc/prices/:currencies', async (req, res) => {

    const currencies = req.params.currencies;
    console.log(' req currencies : ', currencies);

    const url = CoinMarketCapApi.buidPathCMC('prices', currencies);
    console.log('url api CMC : ', url);
    const apiKey = config.CoinMarketCap.api_key;

    let response = null;
    let data = new Promise(async (resolve, reject) => {
      try {
        response = await axios.get(url, {
          headers: {
            'X-CMC_PRO_API_KEY': apiKey,
          },
        });
      } catch (ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
      }
      if (response) {
        // success
        const json = response.data;
        // console.log(json);
        resolve(json);

      }
    }).catch(error => {
      // console.log(error);
      res.json({ error });
    }
    );

    data.then(json => {
      // parse json : keep only the data we need
      const data = json.data;
      // console.log(data);


      res.json(data);
    }).catch(error => {
      console.log(error);
      res.json({ error });
    }
    );
  }
  )
}
