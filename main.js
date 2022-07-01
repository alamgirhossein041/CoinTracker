const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const { success } = require('./helper');
let pokemons = require('./pokemon');
const { error } = require('./helper');
const morgane = require('morgan');
const { Sequelize } = require('sequelize');
const { getUniqueId } = require('./helper');

const app = express();
const port = 3000;

const sequelize = new Sequelize(
    'coinbase_wallet',
    'root',
    '', {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app
    .use(favicon(__dirname + '/favicon.ico')) // set favicon
    .use(morgane('dev')) // Log requests to console
    .use(bodyParser.json()) // Parse JSON bodies

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Main route
app.get('/', (req, res) => res.send('Hello World!'));


// Get Coinbase API data
var crypto = require('crypto');
// npm install request
var request = require('request');



const builOptions = (path) => {

    const apiKey = 'nX38HCWSckkNrN8m';
    const apiSecret = 'NMkK0JhvW8pNCkJw75FrHUcsDSRYMRiJ';
    const timestamp = Math.floor(Date.now() / 1000);

    const req = {
        method: 'GET',
        // path: '/v2/payment-methods',
        // path: '/v2/user',
        // path: 'v2/currencies',
        path: path,
        // path: '/v2/accounts/194a8daf-e12b-5c96-84a3-16db4e361bf0/adresses',
        body: ''
    };

    const message = timestamp + req.method + req.path + req.body;

    const signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

    const options = {
        baseUrl: 'https://api.coinbase.com/',
        url: req.path,
        method: req.method,
        headers: {
            'CB-ACCESS-SIGN': signature,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-KEY': apiKey,
            'CB-VERSION': '2021-06-23'
        }
    };
    return options;
}


app.get('/transactions', (req, res) => {
    const BTC_id = '194a8daf-e12b-5c96-84a3-16db4e361bf0';
    const MATH_id = 'cf8a5ad5-f6c4-5f2a-91b4-2c147d551d25';
    const options = builOptions('/v2/accounts/' + MATH_id + '/transactions');

    request(options, function(error, response) {
        if (error) {
            console.log('error:', error);
        }

        let data = JSON.parse(response.body);
        // Check if the balance.amount of each element is greater than 0

        if (data.data.length > 0) {
            res.json(success(data, "Les transactions sont biens la ce token"));
        } else {
            res.status(404).send('No transactions found for ' + MATH_id);
        }


    })

});


app.get('/accounts', (req, res) => {
    const options = builOptions('/v2/accounts?limit=300');
    request(options, function(error, response) {
        if (error) {
            console.log('error:', error);
        }
        let data = JSON.parse(response.body);
        let balances = [];
        data.data.forEach(function(element) {
            if (element.balance.amount > 0) {
                let amount = element.balance.amount;
                let currency = element.balance.currency;
                let id = element.id;
                balances.push({
                    amount,
                    currency,
                    id
                });
            }
        });
        res.json(success(balances, "Les balances sont biens la"));
    })

});

app.get('/user', (req, res) => {

    const options = builOptions('/v2/user');
    request(options, function(error, response) {
        if (error) {
            console.log('error:', error);
        }

        let data = JSON.parse(response.body);
        // Check if the balance.amount of each element is greater than 0
        res.json(success(data, "Le user est biens la"));
    })

});


app.get('/all-accounts/:limit', (req, res) => {
    if (req.params.limit === undefined) {
        limit = 25;
    }
    const options = builOptions('/v2/accounts/?limit=' + req.params.limit);
    request(options, function(error, response) {
        if (error) {
            console.log('error:', error);
        }
        let data = JSON.parse(response.body);
        // Check if the balance.amount of each element is greater than 0
        res.json(success(data, "Les balances sont biens la"));
    })

});

//Only  For test post method 
app.post('/create-account', (req, res) => {

    let id = getUniqueId();
    let date = new Date();
    let data = {
        id,
        created_at: date.toISOString()
    };
    res.json(success(data, "Le compte a été créé"));
});


// Delete 
app.delete('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)
    pokemons = pokemons.filter(pokemon => pokemon.id !== id)
    const message = `Le pokémon ${pokemonDeleted.name} a bien été supprimé.`
    res.json(success(message, pokemonDeleted))
});