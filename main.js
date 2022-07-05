const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const morgane = require('morgan');
const coinbaseApi = require('./src/api/coinbaseApi');
const request = require('request');
const sequelize = require('./src/db/sequelize');
const app = express();
const port = 3000;
const path = require("path");

app
    .use(favicon(__dirname + '/favicon.ico')) // set favicon
    .use(morgane('dev')) // Log requests to console
    .use(bodyParser.json()) // Parse JSON bodies

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/static', express.static(__dirname + '/views'));

//Front manager
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => console.log(`App listening on port ${port}!`));


// sequelize.initDB(); // inutiliser pour l'instant
// sequelize.syncUserOne();
// sequelize.coinbaseTokenListupdate();
// sequelize.userOneCreate();

// Main route
// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Nouveau end point
require('./src/routes/updateTokenList')(app);
require('./src/routes/checkTokenTransaction')(app);
require('./src/routes/listAccountTransactions')(app);
require('./src/routes/checkIfActiveAccount')(app);
require('./src/routes/activeAccountsList')(app);
require('./src/routes/getAllTransactionsByAccount')(app);