const coinbaseApi = require('../../api/coinbaseApi');
const request = require('request');
const sequelize = require('../../db/sequelize');

module.exports = (app) => {
    // console.clear();
    app.get('/coinbase/transaction/:id_account', async(req, res) => {

        const id_account = req.params.id_account;
        var allTransactions = [];
        let path = '/v2/accounts/' + id_account + '/transactions';
        let nextPagePath = null;

        function listAllTransaction(path) {
            return new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest(path);
                request(options, function(error, response) {
                    console.log('Make a request to ' + path);
                    if (error) {
                        console.log('error:', error);
                        reject(error);
                    }
                    if (response.statusCode == 200) {
                        let data = JSON.parse(response.body);
                        nextPagePath = data.pagination.next_uri;
                        // console.log('get Next Page', nextPagePath);
                        resolve(data.data);
                    }
                })
            });
        }


        async function getAllTransaction() {

            let data = await listAllTransaction(path);
            console.log('data Lenght part', data.length);
            console.log('Next page', nextPagePath);
            allTransactions = allTransactions.concat(data);

            while (nextPagePath != null) {
                let dataNextPage = await listAllTransaction(nextPagePath);
                allTransactions = allTransactions.concat(dataNextPage);
                console.log('get Next Page', nextPagePath);
            }

            console.log('Nbr de transactions', allTransactions.length);
            // Add currency native to the transaction
            let TotalTradeToken = 0;
            let TotalTradeFiat = 0;
            let TotalWithdraw = 0;
            let TotalDeposit = 0;
            let TotalBuy = 0;
            let TotalSell = 0;
            let ParsedTransactions = {};
            for (let i = 0; i < allTransactions.length; i++) {
                console.log(allTransactions[i].native_amount.amount);
                console.log(allTransactions[i].native_amount.currency);
                allTransactions[i].native_amount.native = allTransactions[i].native_amount.amount + ' ' + allTransactions[i].native_amount.currency;
                // Parsed transactions
                ParsedTransactions[i] = {
                    id: allTransactions[i].id,
                    type: allTransactions[i].type,
                    // amount: {
                    //     amount: allTransactions[i].amount.amount,
                    //     currency: allTransactions[i].amount.currency
                    // },
                    // native_amount: {
                    //     amount: allTransactions[i].native_amount.amount,
                    //     currency: allTransactions[i].native_amount.currency
                    // },
                    status: allTransactions[i].status,
                    details: allTransactions[i].details,
                    // format the date 2022-03-10T21:56:14Z to 10 mars 2022 à 21:56:14
                    created_at: formatDate(allTransactions[i].created_at),
                    oDate: allTransactions[i].created_at,

                    // created_at: allTransactions[i].created_at,
                }



                if (allTransactions[i].type == 'trade') {
                    TotalTradeFiat += parseFloat(allTransactions[i].native_amount.amount);
                    TotalTradeToken += parseFloat(allTransactions[i].amount.amount);
                    if (allTransactions[i].amount.amount > 0) {
                        // Buy token
                        TotalBuy += parseFloat(allTransactions[i].amount.amount);
                        let inWallet = parseFloat(allTransactions[i].amount.amount);
                        let inWalletCurrency = allTransactions[i].amount.currency;
                        let outWallet = parseFloat(allTransactions[i].native_amount.amount);
                        let outWalletCurrency = allTransactions[i].native_amount.currency;
                        // push the data in the ParsedTransactions{}
                        ParsedTransactions[i].inWallet = Math.abs(inWallet);
                        ParsedTransactions[i].inWalletCurrency = inWalletCurrency;
                        ParsedTransactions[i].outWallet = outWallet;
                        ParsedTransactions[i].outWalletCurrency = outWalletCurrency;
                    } else {
                        // Sell token
                        TotalSell += parseFloat(allTransactions[i].amount.amount);
                        let inWallet = parseFloat(allTransactions[i].native_amount.amount);
                        let inWalletCurrency = allTransactions[i].native_amount.currency;
                        let outWallet = parseFloat(allTransactions[i].amount.amount);
                        let outWalletCurrency = allTransactions[i].amount.currency;
                        // push the data in the ParsedTransactions{}
                        ParsedTransactions[i].inWallet = Math.abs(inWallet);
                        ParsedTransactions[i].inWalletCurrency = inWalletCurrency;
                        ParsedTransactions[i].outWallet = outWallet;
                        ParsedTransactions[i].outWalletCurrency = outWalletCurrency;
                    }
                    // // get native currency of the transaction
                    // let nativeCurrency = allTransactions[i].native_amount.currency;
                    // // get the native amount of the transaction
                    // let nativeAmount = allTransactions[i].native_amount.amount;
                }
                if (allTransactions[i].type == 'buy') {
                    TotalBuy += parseFloat(allTransactions[i].native_amount.amount);
                }
                if (allTransactions[i].type == 'sell') {
                    TotalSell += parseFloat(allTransactions[i].native_amount.amount);
                }

                if (allTransactions[i].type == 'send') {
                    if (allTransactions[i].amount.amount > 0) {
                        TotalDeposit += parseFloat(allTransactions[i].amount.amount);
                    } else {
                        TotalWithdraw += parseFloat(allTransactions[i].amount.amount);
                    }
                }
                if (allTransactions[i].type == 'receive') {
                    TotalReceive += parseFloat(allTransactions[i].amount.amount);
                }
            }
            // let table = buildTable(allTransactions);
            // res.send(table);
            // res.render('transactions', {
            //     title: 'Transactions',
            //     transactions: allTransactions,
            //     transactionLenght: allTransactions.length,
            //     totalAmount: allTransactions.reduce((acc, cur) => {
            //         return acc + cur.native_amount.amount;
            //     }, 0)
            // });
            res.json({
                title: 'Transactions',
                transactions: ParsedTransactions,
                transactionCount: allTransactions.length,

                TotalTradeFiat: TotalTradeFiat,
                TotalTradeToken: TotalTradeToken,

                TotalWithdraw: TotalWithdraw,
                TotalDeposit: TotalDeposit,

                totalBuyFiat: TotalBuy,
                totalSellFiat: TotalSell
            });
        }


        function formatDate(date) {
            // format the date  on the form "2022-03-10T21:56:14Z" to this form "10 mars 2022 à 21:56:14"
            let preDate = date.substring(0, 10);
            let postDate = date.substring(11, 19);
            let formattedDate = preDate.substring(8, 10) + ' ' + preDate.substring(5, 7) + ' ' + preDate.substring(0, 4) + ' à ' + postDate;
            return formattedDate;
        }



        getAllTransaction();

    });
}