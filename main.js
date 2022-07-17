const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const morgane = require('morgan');
// const coinbaseApi = require('./src/api/coinbaseApi');
// const request = require('request');
// const sequelize = require('./src/db/sequelize');
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");

// Clear console
// console.clear();

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

// Main route
app.get('/', (req, res) => {
    res.render('login', { title: 'Hey', message: 'Hello there!' });
});

// Nouveau end point
// Dump all tokens from the API Coinbase
require('./src/routes/dumpCoinbaseToken')(app);
// Met à jour la liste des tokens et renvoie la liste /tokens-update
require('./src/routes/updateTokenList')(app);
// Get user info from the API Coinbase
require('./src/routes/infoUser')(app);
// Update Active Token where there is a transaction
require('./src/routes/updateActiveAccount')(app);
// Get All Buys of an account
require('./src/routes/getAllBuyAccount')(app);
// Apres Setup 

require('./src/routes/checkTokenTransaction')(app);
require('./src/routes/listAccountTransactions')(app);

require('./src/routes/getAllTransactionsByAccount')(app);
// Login
require('./src/routes/login')(app);

require('./src/routes/register')(app);