const coinbaseApi = require('../src/api/coinbaseApi');
const request = require('request');
const sequelize = require('../src/db/sequelize');

module.exports = (app) => {
    app.get('/coinbase/transaction-list', async(req, res) => {


        const allTokenList = await sequelize.getAllTokenDB();
        // res.json({ data: allTokenList, message: "Les tokens sont biens la" });
        // let tokenListWithAccount = [];
        // let tokenListWitOuthAccount = [];
        // let checkAccountArray = [];
        let responseArray = [];
        for (let i = 0; i < allTokenList.length; i++) {
            //     console.log(allTokenList[i].id_wallet);

            const options = coinbaseApi.builOptionsRequest('/v2/accounts/' + allTokenList[i].id_wallet + '/transactions');
            console.log(options);
            request(options, function(error, response) {
                if (error) {
                    console.log('error:', error);
                }
                if (response) {
                    // let data = JSON.parse(response);
                    responseArray.push(response);
                }
            })

        }
    })
}