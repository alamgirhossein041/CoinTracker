const coinbaseApi = require('../api/coinbaseApi');
const request = require('request');
const sequelize = require('../db/sequelize');

module.exports = (app) => {
    console.clear();
    app.get('/transaction/:id_account', async(req, res) => {

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
            // let table = buildTable(allTransactions);
            // res.send(table);
            res.render('transactions', { title: 'Transactions', transactions: allTransactions });
        }

        function buildTable(allTransaction) {

            let table = '<table class="table table-striped">';
            table += '<thead>';
            table += '<tr>';
            table += '<th>Date</th>';
            table += '<th>Amount</th>';
            table += '<th>Currency</th>';
            table += '<th>Description</th>';
            table += '<th>Details</th>';
            table += '</tr>';
            table += '</thead>';
            table += '<tbody>';
            for (let i = 0; i < allTransaction.length; i++) {
                table += '<tr>';
                table += '<td>' + allTransaction[i].created_at + '</td>';
                table += '<td>' + allTransaction[i].amount.amount + '</td>';
                table += '<td>' + allTransaction[i].amount.currency + '</td>';
                table += '<td>' + allTransaction[i].description + '</td>';
                table += '<td>' + allTransaction[i].details.title + '</td>';
                table += '</tr>';
            }
            table += '</tbody>';
            table += '</table>';
            return table;
        }


        getAllTransaction();

    });
}