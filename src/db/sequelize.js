const { Sequelize, DataTypes, Op } = require('sequelize');
const request = require('request');
const UserModel = require('../models/User');
// const CoinBaseTokenModel = require('../models/CoinBaseToken');
const secret = require('../../secret.json');
const bcrypt = require('bcrypt');


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

// Connexion DB
sequelize.authenticate()
    .then(() => {
        console.log('Connection DB has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const User = UserModel(sequelize, DataTypes);
// const CoinBaseToken = CoinBaseTokenModel(sequelize, DataTypes);


// Add a user to DB to test 
const addUserOne = () => {
    console.log('Synchronisation du user 1');
    return sequelize.sync({})
        .then(() => {

            bcrypt.hash(secret.password, 10).then(hash => {

                User.create({
                    id_coinbase: '64cefb03-09a6-5c81-83d0-537cd1959a1c',
                    name: 'Olivier',
                    email: 'oliv@gmail.com',
                    password: hash,
                    exchange: {},
                    is_verified: true,
                    roles: {"admin":true,"user":true}
                }).then(user => {
                    console.log(user);

                }).catch(err => {
                    console.log(err);
                });
            });


            console.log('Database synced');
        }).catch(err => {
            console.error('Unable to sync database:', err);
        });
}


const initDB = async () => {

    return sequelize.sync({ force: true }).then(() => {

        console.log('La base de donnée a bien été initialisée !')
        addUserOne();
    })
}


module.exports = {
    initDB,
    User,
    addUserOne,
    sequelize,
    DataTypes
}