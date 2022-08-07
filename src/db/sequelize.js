const { Sequelize, DataTypes, Op } = require('sequelize');
const request = require('request');
const UserModel = require('../models/User');
const CoinBaseTokenModel = require('../models/CoinBaseToken');
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
const CoinBaseToken = CoinBaseTokenModel(sequelize, DataTypes);


// Add a user to DB to test 
const syncUserOne = () => {
    console.log('Synchronisation du user 1');
    return sequelize.sync({  })
        .then(() => {

            bcrypt.hash(secret.password, 10).then(hash => {

                User.create({
                    id_coinbase: '64cefb03-09a6-5c81-83d0-537cd1959a1c',
                    name: 'Olivier',
                    email: 'oliv@gmail.com',
                    password: hash,
                    wallets: { BTC: { balance: 0, address: '', type: 'BTC' }, ETH: { balance: 0, address: '', type: 'ETH' }, LTC: { balance: 0, address: '', type: 'LTC' } },
                    api_key: secret.api_key,
                    api_secret: secret.api_secret,
                    is_verified: true,
                }).then(user => {
                    // console.log(user);

                }).catch(err => {
                    console.log(err);
                });
            });


            console.log('Database synced');
        }).catch(err => {
            console.error('Unable to sync database:', err);
        });
}

// Supprime tous les tokens de la base de donnée
const coinbaseTokenDestroy = async() => {
    await CoinBaseToken.destroy({
        truncate: true,
        restartIdentity: true,
        logging: console.log
    });
}



const coinbaseSetTokenList = (tokenList) => {
    tokenList.map(token => {
        CoinBaseToken.create({
            name: token.name,
            code: token.code,
            id_wallet: token.id_wallet,
            id_token: token.id_token,
            type: token.type
        }).then(token => {
            // console.log(token);
        }).catch(err => {
            console.log(err);
        });
    })
}

const initDB = async() => {

    return sequelize.sync({ force: true }).then(() => {
        console.log('La base de donnée a bien été initialisée !')
    })
}

const getAllTokenDB = () => {
    const oneHourAgo = new Date(new Date().setHours(new Date().getHours() - 2));
    const ThirtyminutesAgo = new Date(new Date().setMinutes(new Date().getMinutes() - 10));
    const tokens = CoinBaseToken.findAll({
        // where update time is more longer
        where: {
            // updatedAt: {
            //     [Op.gt]: ThirtyminutesAgo,
            //     [Op.lt]: new Date()
            // }
            is_transaction: null,
            // is_transaction: 1
            // is_transaction: [{
            //     [Op.ne]: 1
            // }, {
            //     [Op.ne]: 0
            // }]
        },
        // More old first
        order: [
            ['updatedAt', 'ASC']
        ],
        limit: 50
    });
    return tokens;
}

const getAllTokenActive = () => {
    // get the token list from the database with transaction status true
    const tokensList = CoinBaseToken.findAll({
        where: {
            is_transaction: 1
        }
    });
    return tokensList;

}

const updateAccountStatus = (tokenCode, status) => {
    // console.log(tokenCode);
    CoinBaseToken.update({
        is_transaction: status
    }, {
        where: {
            code: tokenCode
        }
    }).then(token => {
        console.log(tokenCode + ' has been updated to ' + status);
    }).catch(err => {
        console.log(err);
    });
}



const getTokenActive = () => {
    const tokensList = CoinBaseToken.findAll({
        where: {
            is_transaction: true
        },
        order: [
            ['code', 'ASC']
        ],
    });
    return tokensList;
}



module.exports = {
    initDB,
    User,
    syncUserOne,
    coinbaseSetTokenList,
    CoinBaseToken,
    getAllTokenDB,
    updateAccountStatus,
    getTokenActive,
    coinbaseTokenDestroy,
    getAllTokenActive
}