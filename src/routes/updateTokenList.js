const coinbaseApi = require('../api/coinbaseApi');
const request = require('request');
const sequelize = require('../db/sequelize');

module.exports = (app) => {
    app.get('/tokens-update', (req, res) => {
        // Reset DB before inserting new data
        // sequelize.coinbaseTokenDBreset();
        // Get all tokens from the API Coinbase

        let path = '/v2/accounts';
        let allAccounts = [];
        let nextPagePath = null;

        function getPageTokenList(path) {
            return new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest(path);
                request(options, function(error, response) {
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
            allAccounts.forEach(function(element) {

                let name = element.currency.name;
                let id_wallet = element.id;
                // Check if the token is a fiat currency
                let type = element.type;
                let id_token = '';
                if (type !== 'fiat') {
                    id_token = element.currency.asset_id;
                } else {
                    id_token = 'no-id-for-fiat';
                }

                let code = element.currency.code;
                tokenList.push({
                    name,
                    id_wallet,
                    id_token,
                    code,
                    type
                });
            });
            // console.log('tokenList', tokenList);
            res.json({ data: tokenList, message: "La liste des tokens est mise à jour avec " + tokenList.length + " tokens" });
            sequelize.coinbaseSetTokenList(tokenList);
        }
        getAllTokens();

    });
}


// // Set the tokenList in the database
// sequelize.coinbaseSetTokenList(tokenList);