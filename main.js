const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const morgane = require('morgan');

// const sequelize = require('./src/db/sequelize');
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");

// Clear console
console.clear();

app
    .use(favicon(__dirname + '/favicon.ico')) // set favicon
    .use(morgane('dev')) // Log requests to console
    .use(bodyParser.json()) // Parse JSON bodies

// app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
// app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/static', express.static(__dirname + '/views'));

//Front manager
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => console.log(`App listening on port ${port}!`));

// sequelize.initDB(); // inutiliser pour l'instant
// sequelize.syncUserOne();

// Main route
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// End point
//Coinbase
// SETUP
// getAllTokenDB
// require('./trash/getAllTokenDB')(app);

// Donne les montand du portefeuille Coinbase 
require('./src/routes/Coinbase/getWallet')(app);

// Get user info from the API Coinbase
require('./src/routes/Coinbase/infoUser')(app);

require('./src/routes/Coinbase/getAllTransaction')(app);

// Apres Setup 
require('./src/routes/Coinbase/checkTokenTransaction')(app);
require('./src/routes/Coinbase/listAccountTransactions')(app);
require('./src/routes/Coinbase/getAllTransactionsByAccount')(app);

// require('./trash/getTokensActive')(app);
// 15/08/22 Get directly account info from the API Coinbase
require('./src/routes/Coinbase/getsingleAccountById')(app);

// Login
require('./src/routes/login')(app);
require('./src/routes/register')(app);


//Kucoin wallet
require('./src/routes/Kucoin/getKucoinWallet')(app);
require('./src/routes/Kucoin/getHolds')(app);

//Crypto Wallet balance
require('./src/routes/Crypto/getBalances')(app);
// Crypto Wallet trades
require('./src/routes/Crypto/getTrades')(app);

// Gateio wallet
require('./src/routes/GateIo/getWallet')(app);
// GateIO WebSocket
require('./src/routes/GateIo/webSocket')(app);

// Metamask wallet
require('./src/routes/Metamask/getWallet')(app);

// CoinMarketCap
require('./src/routes/CoinMarketCap/getAllTokensId')(app);
require('./src/routes/CoinMarketCap/getCoinData')(app);
require('./src/routes/CoinMarketCap/getPrices')(app);



