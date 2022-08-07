const coinbaseApi = require('../../api/coinbaseApi');
const request = require('request');
const sequelize = require('../../db/sequelize');

module.exports = (app) => {
    app.get('/coinbase/wallet', async (req, res) => {

        var allBalances = [];
        let tokenList = await sequelize.getAllTokenActive();
        console.log(tokenList);

        // ask api for each token in the list to have balance 
        function getBalance(path) {
            return new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest(path);
                request(options, function (error, response) {
                    if (error) {
                        console.log('error:', error);
                        reject(error);
                    }
                    if (response) {
                        resolve(response.body);
                    }
                })
            });
        }


        async function getBalanceAll() {
            console.log('getBalanceAll');
            let i = 0;
            while (i < parseInt(tokenList.length )) {
                console.log('i ' + i);
                if (tokenList[i]) {
                    console.log('Token ', tokenList[i].code);
                    let path = '/v2/accounts/' + tokenList[i].id_wallet;
                    let data = await getBalance(path);
                    let dataJson = JSON.parse(data);

                    // get the price of the token
                    console.log('Data ', dataJson.data.name);

                    let priceData = await coinbaseApi.getPrice(tokenList[i].code);
                    console.log('Price ', priceData.data.amount);
                    // merge the data with the price
                    dataJson.data.price = priceData.data.amount;
                
                    allBalances = allBalances.concat(dataJson);
                }
                i++;
            }
      
            // Parse data to get only balance,name and type
            let balances = [];
            let timestamp = new Date().getTime();
            allBalances.map(token => {
                let balanceObj = {};
                balanceObj.balance = token.data.balance.amount;
                balanceObj.name = token.data.currency.name;
                balanceObj.code = token.data.currency.code;
                balanceObj.type = token.data.type;
                balanceObj.id_wallet = token.data.id;
                balanceObj.live_price = token.data.price;
                balances.push(balanceObj);
                balanceObj.timestamp = timestamp;
            }
            )

            // add timestamp to the data
            return res.json({ balances: balances, message: "Wallet est mis à jour avec " + tokenList.length + " tokens actifs" });
        }


        getBalanceAll();
    }
    )
}



