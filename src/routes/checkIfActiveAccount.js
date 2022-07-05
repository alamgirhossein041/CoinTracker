const coinbaseApi = require('../api/coinbaseApi');
const request = require('request');
const sequelize = require('../db/sequelize');

module.exports = (app) => {
    app.get('/account/active', async(req, res) => {


        // Make promise to get all token with transactions
        const fnc = new Promise((resolve, reject) => {

            let tokenList = sequelize.getAllTokenDB();

            tokenList.then(function(tokenList) {
                // console.log(tokenList);
                return resolve(tokenList);
            }).catch(function(err) {
                reject(err);
            });
        });


        fnc.then(function(tokenList) {

            console.log('-------- Length To Chek API --------');
            console.log(tokenList.length);

            for (let i = 0; i < tokenList.length; i++) {

                // setTimeout(function() {
                //     console.log('-------Token--------');
                //     console.log(tokenList[i].code);
                // }, i * 1000);
                const promis = new Promise((resolve, reject) => {
                    console.log(tokenList[i].code);
                    const options = coinbaseApi.builOptionsRequest('/v2/accounts/' + tokenList[i].id_wallet + '/transactions');
                    // wait 2s before each request
                    let timerID = setTimeout(() => {
                        console.log('Launch request for ' + tokenList[i].code);
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
                    let dataLenght = dataJson.data.length;
                    if (dataLenght > 0) {
                        sequelize.updateAccountStatus(tokenList[i].code, true);
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



    })
}