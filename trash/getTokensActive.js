

const sequelize = require('../src/db/sequelize');

module.exports = (app) => {
    app.get('/coinbase/tokens-active', async (req, res) => {

        let tokenList = await sequelize.getAllTokenActive()
        // add timestamp to tokenlist
        tokenList = [ tokenList,  Date.now()
        ];

        // ask api for each token in the list to have balance 
        res.json({ tokenList: tokenList, message: "La liste des tokens est mise à jour avec " + tokenList.length + " tokens actifs" });
    }
    )
}



