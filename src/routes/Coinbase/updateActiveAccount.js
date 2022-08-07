const coinbaseApi = require('../../api/coinbaseApi');
const request = require('request');
const sequelize = require('../../db/sequelize');

module.exports = (app) => {
    app.get('/coinbase/update-active-account', async(req, res) => {

        let dataArray = [];
        // Make promise to get all token with transactions
        const fnc = new Promise((resolve, reject) => {

            let tokenList = sequelize.getAllTokenDB();

            tokenList.then(function(tokenList) {
                return resolve(tokenList);
            }).catch(function(err) {
                reject(err);
            });
        });


        fnc.then(function(tokenList) {

            console.log('-------- Length To Chek API --------');
            console.log(tokenList.length);

            for (let i = 0; i < tokenList.length; i++) {

                const promis = new Promise((resolve, reject) => {
                    console.log(tokenList[i].code);

                    // wait 2s before each request
                    setTimeout(() => {
                        console.log('Launch request for ' + tokenList[i].code);
                        const options = coinbaseApi.builOptionsRequest('/v2/accounts/' + tokenList[i].id_wallet + '/transactions');
                        request(options, function(error, response) {
                            if (error) {
                                console.log('error:', error);
                                reject(error);
                            }
                            if (response) {
                                resolve(response.body);
                            }
                        })
                    }, i * 1000);

                });
                promis.then(function(data) {
                    let dataJson = JSON.parse(data);
                    // Check if property data exist
                   
                    if (dataJson.data) {

                        let dataLenght = dataJson.data.length;

                        if (dataLenght > 0) {
                            dataArray.push(dataJson);
                             console.log(dataJson);
                            sequelize.updateAccountStatus(tokenList[i].code, true);
                        } else {
                            console.log('No transaction for ' + tokenList[i].code);
                            sequelize.updateAccountStatus(tokenList[i].code, false);
                        }
                    } else {
                        sequelize.updateAccountStatus(tokenList[i].code, false);
                    }



                }).catch(function(err) {
                    console.log(err);
                });
                
            }
        }).catch(function(err) {
            console.log(err);
        });

        fnc.then(function(tokenList) {
            res.json({ title: 'Tokens', accounts: tokenList });

        });
    })
}