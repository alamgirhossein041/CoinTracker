const request = require('request');
const sequelize = require('../db/sequelize');


module.exports = (app) => {
    app.get('/activeAccountsList', async(req, res) => {


        let getTokenActive = await sequelize.getTokenActive();

        // build a table with all the active tokens
        let table = '<table class="table table-striped">';
        table += '<thead>';
        table += '<tr>';
        table += '<th>Code</th>';
        table += '<th>Wallet</th>';
        table += '<th>Balance</th>';
        table += '<th>Date</th>';
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
        for (let i = 0; i < getTokenActive.length; i++) {
            table += '<tr>';
            table += '<td>' + getTokenActive[i].code + '</td>';
            table += '<td>' + getTokenActive[i].id_wallet + '</td>';
            table += '<td>1000</td>';
            table += '<td>' + getTokenActive[i].createdAt + '</td>';
            table += '</tr>';
        }
        table += '</tbody>';
        table += '</table>';

        res.send(table);
    });

}