const CoinMarketCapApi = require('../../api/CoinMarketCapApi');
const config = require('../../../secret.json');

const axios = require('axios');

module.exports = (app) => {
    app.get('/cmc/:endPoint', async (req, res) => {
        console.log(req.params.endPoint);
    
        const url = CoinMarketCapApi.buidPathCMC(req.params.endPoint, req.query);
        const apiKey = config.CoinMarketCap.api_key;
       
        let response = null;
        let data = new Promise(async (resolve, reject) => {
          try {
            response = await axios.get(url, {
              headers: {
                'X-CMC_PRO_API_KEY': apiKey,
              },
            });
          } catch(ex) {
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
            console.log(error);
            res.json({ error });
            }
        );

        data.then(json => {
            // parse json : keep only the data we need
            const data = json.data;
            // console.log(data);
            const dataToSend = [];
            Object.keys(data).forEach ((value) => {
                console.log(data[value]);
                console.log('_________________________')
                // delete data[value][0].description;
                delete data[value][0].urls;
                delete data[value][0].tags;
                delete data[value][0]['tag-names'];
                delete data[value][0]['tag-groups'];
                delete data[value][0]['notice'];
                delete data[value][0]['self_reported_circulating_supply'];
                delete data[value][0]['self_reported_tags'];
                delete data[value][0]['self_reported_market_cap'];
                delete data[value][0]['contract_address'];
                delete data[value][0]['platform'];
                delete data[value][0]['twitter_username'];
                dataToSend.push(data[value]);
            });

            res.json((dataToSend));
        }).catch(error => {
            console.log(error);
            res.json({ error });
        }
        );
    }
    )
}
