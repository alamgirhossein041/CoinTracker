const express = require('express');
const favicon = require('serve-favicon');
const { success } = require('../helper');
// const pokemons = require('./pokemon');
const { error } = require('../helper');
const morgane = require('morgan');

const app = express();
const port = 3000;

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgane('dev'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Main route
app.get('/', (req, res) => res.send('Hello World!'));


// // add endpoint to get the current date and time
// app.get('/pokemon/:id', (req, res) => {
//     const id = req.params.id;
//     const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id));
//     if (pokemon) {
//         const message = "Le Pokemon est enregistré";
//         res.json(success(pokemon, message));
//     } else {
//         res.status(404).send('Pokemon not found');
//     }

// });

// // Calcul du nombre de pokemons total
// app.get('/pokemons', (req, res) => {
//     // let nbPokemons = pokemons.length;
//     res.json(success(pokemons, "Les pokemon sont biens la"));
// });

// Get Coinbase API data
// npm install crypto
var crypto = require('crypto');
// npm install request
// var request = require('request');
var apiKey = 'nX38HCWSckkNrN8m';
var apiSecret = 'NMkK0JhvW8pNCkJw75FrHUcsDSRYMRiJ';