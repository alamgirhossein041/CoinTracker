const coinbase = require('../../../db/coinbase');

module.exports = (app) => {
    app.get('/coinbase/getTokenDB', async(req, res) => {

        let TokenList = await coinbase.getAllTokenDB();
        res.json({
            message: 'Get all tokens success',
            longueur: TokenList.length,
            tokenList: TokenList
        });
    });
}