const { Sequelize, DataTypes, Op } = require('sequelize');
const request = require('request');
const UserModel = require('../models/User');
const CoinBaseTokenModel = require('../models/CoinBaseToken');

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

const User = UserModel(sequelize, DataTypes);

const sync = () => {
    return sequelize.sync({ force: true })
        .then(() => {
            User.create({
                id_coinbase: '64cefb03-09a6-5c81-83d0-537cd1959a1c',
                name: 'Olivier Mongeot',
                email: 'john@gmail.com',
                password: '123456',
                wallets: { BTC: { balance: 0, address: '', type: 'BTC' }, ETH: { balance: 0, address: '', type: 'ETH' }, LTC: { balance: 0, address: '', type: 'LTC' } }
            }).then(user => {
                console.log(user);

            }).catch(err => {
                console.log(err);
            });

            console.log('Database synced');
        }).catch(err => {
            console.error('Unable to sync database:', err);
        });
}

const CoinBaseToken = CoinBaseTokenModel(sequelize, DataTypes);

const coinbaseTokenDBreset = () => {

    return sequelize.sync({ force: true })
        .then(() => {
            console.log('Database reset & synced');
        }).catch(err => {
            console.error('Unable to sync database:', err);
        });
}

const coinbaseSetTokenList = (tokenList) => {
    tokenList.map(token => {
        CoinBaseToken.create({
            name: token.name,
            code: token.code,
            id_wallet: token.id_wallet,
            id_token: token.id_token
        }).then(token => {
            console.log(token);
        }).catch(err => {
            console.log(err);
        });
    })
}

const initDB = () => {

    return sequelize.sync({ force: true }).then(() => {
        // CoinBaseTokens.map(pokemon => {
        //     Pokemon.create({
        //         name: pokemon.name,
        //         hp: pokemon.hp,
        //         cp: pokemon.cp,
        //         picture: pokemon.picture,
        //         types: pokemon.types.join()
        //     }).then(pokemon => console.log(pokemon.toJSON()))
        // })
        console.log('La base de donnée a bien été initialisée !')
    })
}

const getAllTokenDB = () => {
    // const oneDaysAgo = new Date(new Date().setDate(new Date().getDate() - 1));
    const oneHourAgo = new Date(new Date().setHours(new Date().getHours() - 2));
    const ThirtyminutesAgo = new Date(new Date().setMinutes(new Date().getMinutes() - 10));
    const tokens = CoinBaseToken.findAll({
        // where update time is more longer
        // class by date update
        // sort: [
        //     ['updatedAt', 'ASC']
        // ],
        where: {
            // is_transaction: null,
            updatedAt: {
                [Op.gt]: ThirtyminutesAgo,
                [Op.lt]: new Date()
            }
        },
        order: [
            ['updatedAt', 'DESC']
        ],
        limit: 10
    });
    return tokens;
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
    sync,
    coinbaseTokenDBreset,
    coinbaseSetTokenList,
    CoinBaseToken,
    getAllTokenDB,
    updateAccountStatus,
    getTokenActive
}