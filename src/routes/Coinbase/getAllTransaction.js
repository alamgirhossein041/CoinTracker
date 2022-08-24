const coinbaseApi = require('../../api/coinbaseApi');
const request = require('request');

module.exports = (app) => {
    app.get('/coinbase/tokens-transactions', async (req, res) => {
        // Reset DB before inserting new data
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
                let updated_at = new Date().getTime();

                tokenList.push({
                    name,
                    id_token,
                    id_wallet,
                    code,
                    type,
                    amount,
                    updated_at
                });

            });


            return tokenList;

        }


        let tokenList = await getAllTokens();
        // res.json({ data: tokenList, message: "Le wallet est mis à jour avec " + tokenList.length + " tokens" });


        // Check if there a transaction for each tokens
        ////////////////////////////////////////////

        function getTransactions(path) {
            // console.log('get Transaction for', path)
            return new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest(path);
                request(options, function (error, response) {
                    if (error) {
                        console.log('error:', error);
                        reject(error);
                    }
                    let data = JSON.parse(response.body);
                    resolve(data.data);
                })
            })
        }


        let i = 0;
        let allTransactions = [];
        // console.log(tokenList);
        while (i < tokenList.length) {

            let account_id = tokenList[i].id_wallet;
            const path = '/v2/accounts/' + account_id + '/transactions';
            console.log('get Transaction for', path)
            let transaction = await getTransactions(path);
            allTransactions = allTransactions.concat(transaction)
            i++;
        }

        res.json({ allTransactions: allTransactions, });

    });
}