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

// End points
// Coinbase
// Donne les montants du portefeuille Coinbase 
require('./src/routes/Coinbase/getWallet')(app);
// Get user info from the API Coinbase
require('./src/routes/Coinbase/infoUser')(app);
require('./src/routes/Coinbase/getAllTransaction')(app);
require('./src/routes/Coinbase/getAllTransactionsAccount')(app);
// 15/08/22 Get directly account info from the API Coinbase
require('./src/routes/Coinbase/getsingleAccountById')(app);

// Login
require('./src/routes/login')(app);
require('./src/routes/register')(app);

//Kucoin wallet
require('./src/routes/Kucoin/getKucoinWallet')(app);
require('./src/routes/Kucoin/getHolds')(app);
require('./src/routes/Kucoin/getMarket')(app);

//Crypto Wallet balance
require('./src/routes/Crypto/getBalances')(app);
require('./src/routes/Crypto/getTrades')(app);

//Gateio wallet
require('./src/routes/GateIo/getWallet')(app);
// require('./src/routes/GateIo/webSocket')(app);

// Metamask wallet
require('./src/routes/Metamask/getWallet')(app);

// CoinMarketCap
require('./src/routes/CoinMarketCap/getAllTokensId')(app);
require('./src/routes/CoinMarketCap/getCoinData')(app);
require('./src/routes/CoinMarketCap/getPrices')(app);

//Binance 
require('./src/routes/Binance/getWallet')(app);

// test date 
require('./src/routes/date')(app);



