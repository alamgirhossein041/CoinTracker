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

        const tokenListCoinbase = [
            {
                "name": "Project Galaxy",
                "id_token": "9811803c-3c98-46a0-9e1c-3ae664677a49",
                "id_wallet": "5c600887-510e-52ca-a421-d127635976b4",
                "code": "GAL",
                "type": "wallet",
                "amount": "0.81773614",
                "updated_at": 1661413631130
            },
            // {
            //     "name": "Aleph.im",
            //     "id_token": "23cd23c2-ba2c-5343-af47-cb3cefa17f37",
            //     "id_wallet": "964971b2-f1d2-5414-a069-a8f3222ef852",
            //     "code": "ALEPH",
            //     "type": "wallet",
            //     "amount": "11.49131832",
            //     "updated_at": 1661413631130
            // },
            // {
            //     "name": "Dogecoin",
            //     "id_token": "d9a3edfa-1be7-589c-bd20-c034f3830b60",
            //     "id_wallet": "c1189be2-da58-5d31-9161-8bd182b826b9",
            //     "code": "DOGE",
            //     "type": "vault",
            //     "amount": "0.00000000",
            //     "updated_at": 1661413631130
            // },
            // {
            //     "name": "Fetch.ai",
            //     "id_token": "3672ab4a-25e0-57a8-b029-99239c081958",
            //     "id_wallet": "9d730b70-bf17-50fa-9f35-eedb489e0896",
            //     "code": "FET",
            //     "type": "vault",
            //     "amount": "0.00000000",
            //     "updated_at": 1661413631130
            // },
            {
                "name": "Ethereum",
                "id_token": "d85dce9b-5b73-5c3c-8978-522ce1d1c1b4",
                "id_wallet": "e33d3c7e-c6bf-5c5e-8860-4370cefc5390",
                "code": "ETH",
                "type": "wallet",
                "amount": "0.00000000",
                "updated_at": 1661413631131
            },
            // {
            //     "name": "Stellar Lumens",
            //     "id_token": "13b83335-5ede-595b-821e-5bcdfa80560f",
            //     "id_wallet": "d211a2f0-cab0-5001-88c6-5d08078cafb9",
            //     "code": "XLM",
            //     "type": "wallet",
            //     "amount": "0.0000000",
            //     "updated_at": 1661413631131
            // },
            // {
            //     "name": "Polygon",
            //     "id_token": "026bcc1e-9163-591c-a709-34dd18b2e7a1",
            //     "id_wallet": "c509609b-d3a7-52a7-86d6-111477bb1785",
            //     "code": "MATIC",
            //     "type": "wallet",
            //     "amount": "0.00000000",
            //     "updated_at": 1661413631131
            // },
            {
                "name": "Stargate Finance",
                "id_token": "dc8930f5-133d-4265-91d5-9e5d2d453013",
                "id_wallet": "STG",
                "code": "STG",
                "type": "wallet",
                "amount": "0.00000000",
                "updated_at": 1661413631131
            },
            {
                "name": "Algorand",
                "id_token": "9220d47f-bc0a-53ad-9646-ef49918adcf3",
                "id_wallet": "306062cb-1cfd-56ec-bc0f-9e23a1c339c9",
                "code": "ALGO",
                "type": "wallet",
                "amount": "0.248902",
                "updated_at": 1661413631131

            }];

        // let tokenList = await getAllTokens();
        // console.log(tokenListCoinbase);
        let tokenList = tokenListCoinbase;

        // Check if there a transaction for each tokens
        ////////////////////////////////////////////
        let nextPagePathTransac = null;

        async function listOnePageTransactions(path) {
            // console.log('get Transaction for', path)
            return new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest(path);
                request(options, function (error, response) {
                    if (error) {
                        console.log('error:', error);
                        reject(error);
                    }
                    if (response) {
                        if (response.statusCode == 200) {
                            // console.log(response)
                            let data = JSON.parse(response.body);
                            nextPagePathTransac = data.pagination.next_uri;
                            console.log("nextPagePathTransac", nextPagePathTransac)
                            resolve(data.data);
                        }
                    }

                })
            })

        }
        let allTransactionsAccount = [];

        function simplifyDataTransactionCoinbase(allTransactions) {
            let TotalTradeToken = 0;
            let TotalTradeFiat = 0;
            let TotalWithdraw = 0;
            let TotalDeposit = 0;
            let TotalBuy = 0;
            let TotalSell = 0;
            let parsedTransactions = [];
            for (let i = 0; i < allTransactions.length; i++) {
                console.log(allTransactions[i].native_amount.amount);
                console.log(allTransactions[i].native_amount.currency);
                allTransactions[i].native_amount.native = allTransactions[i].native_amount.amount + ' ' + allTransactions[i].native_amount.currency;
                // Parsed transactions
                parsedTransactions[i] = {
                    currency: allTransactions[i].amount.currency,
                    id: allTransactions[i].id,
                    type: allTransactions[i].type,
                    status: allTransactions[i].status,
                    details: allTransactions[i].details,
                    created_at: formatDate(allTransactions[i].created_at),
                    oDate: allTransactions[i].created_at,
                }

            }


            return parsedTransactions;
        }

        function formatDate(date) {
            // format the date  on the form "2022-03-10T21:56:14Z" to this form "10 mars 2022 à 21:56:14"
            let preDate = date.substring(0, 10);
            let postDate = date.substring(11, 19);
            let formattedDate = preDate.substring(8, 10) + ' ' + preDate.substring(5, 7) + ' ' + preDate.substring(0, 4) + ' à ' + postDate;
            return formattedDate;
        }



        async function getallTransactionsAccount(path) {
            let allTransactionsAccount = [];
            console.log('Get First Page')
            let data = await listOnePageTransactions(path);
            allTransactionsAccount = allTransactionsAccount.concat(data);

            while (nextPagePathTransac != null) {
                console.log('Get Next Page ',nextPagePathTransac)
                let dataNextPageTransac = await listOnePageTransactions(nextPagePathTransac);
                allTransactionsAccount = allTransactionsAccount.concat(dataNextPageTransac);
            }

            return allTransactionsAccount;
        }


        let i = 0;
        let allTransactions = [];
        // let parsedData = [];
        // console.log(tokenList);
        while (i < tokenList.length) {
            let currency = tokenList[i].code;

            console.log(currency);
            const account_id = tokenList[i].id_wallet;
            const path = '/v2/accounts/' + account_id + '/transactions';
            console.log('get Transaction for', path)
            const transactions = await getallTransactionsAccount(path);
          
            console.log('transactions.length',transactions.length)
    
            if (transactions.length > 0) {
                const trx = [{ currency: currency, transactions: transactions, counter: transactions.length }];
                allTransactions = allTransactions.concat(trx)
            }
            i++;

        }

        // Parse to simplify data faire une function 
        // let parsedData = simplifyDataTransactionCoinbase(allTransactions);

        res.json({
            allTransactions: allTransactions,
            // parsedData: parsedData
        });

    });
}