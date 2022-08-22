const coinbaseApi = require('../../../api/coinbaseApi');
const request = require('request');
const coinbase = require('../../../db/coinbase');

module.exports = (app) => {
    app.get('/coinbase/set-tokens-db', (req, res) => {
        // Reset DB before inserting new data
        coinbase.tokenDestroy();
        // Get all tokens from the API Coinbase

        let path = '/v2/accounts';
        let allAccounts = [];
        let nextPagePath = null;

        function getPageTokenList(path) {
            return new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest(path);
                request(options, function (error, response) {
                    if (error) {
                        console.log('error:', error);
                        reject(error);
                    }
                    let data = JSON.parse(response.body);
                    nextPagePath = data.pagination.next_uri;
                    console.log('get Next Path page', nextPagePath);
                    resolve(data.data);
                })
            })
        }

        async function getAllTokens() {
            try {
                let data = await getPageTokenList(path);
                allAccounts = allAccounts.concat(data);
            } catch (error) {
                console.log('error:', error);
            }

            while (nextPagePath != null) {
                let dataNextPage = await getPageTokenList(nextPagePath);
                allAccounts = allAccounts.concat(dataNextPage);
            }
            // Lenght of allAccounts
            console.log('Nbr de tokens', allAccounts.length);
            // res.json({ title: 'Tokens', accounts: allAccounts });
            let tokenList = [];

            allAccounts.map(function (element) {

                let name = element.currency.name;
                // Check if the token is a fiat currency
                let type = element.type;
                let id_token = '';
                if (type !== 'fiat') {
                    id_token = element.currency.asset_id;
                } else {
                    id_token = 'no-id-for-fiat';
                }
                let amount = element.balance.amount;
                let id_wallet = element.id;
                let code = element.currency.code;

                if (amount > 0) {
                    // let priceData = await coinbaseApi.getPrice(code);
                    // console.log(priceData);
                    tokenList.push({
                        name,
                        id_token,
                        id_wallet,
                        code,
                        type,
                        amount
                    });
                }
            });

            let k = 0;
            while (k < tokenList.length) {
                let code = tokenList[k].code
                let priceData = await coinbaseApi.getPrice(code);
                console.log(priceData);
                tokenList[k].price = priceData;
                k++;
            }


            res.json({ data: tokenList, message: "La liste des tokens est mise à jour avec " + tokenList.length + " tokens" });



            // coinbase.coinbaseSetTokenList(tokenList);
            // console.log('tokenList', tokenList);

        }
        getAllTokens();
    });
}

// // Set the tokenList in the database
// sequelize.coinbaseSetTokenList(tokenList);