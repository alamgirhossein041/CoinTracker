const CoinBaseTokenModel = require('../models/CoinBaseToken');
const {sequelize, DataTypes} = require('../db/sequelize');


const CoinBaseToken = CoinBaseTokenModel(sequelize, DataTypes);


const getAllTokenDB = () => {
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
        // limit: 50
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


// Supprime tous les tokens de la base de donnée
const tokenDestroy = async() => {
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
            id_token: token.id_token,
            type: token.type
        }).then(token => {
            // console.log(token);
        }).catch(err => {
            console.log(err);
        });
    })
}


module.exports = {
    CoinBaseToken,
    getAllTokenDB,
    getAllTokenActive,
    updateAccountStatus,
    tokenDestroy,
    coinbaseSetTokenList
}
    


