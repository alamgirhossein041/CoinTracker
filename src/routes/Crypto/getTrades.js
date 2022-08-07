
const CryptoApiDirect = require('../../api/CryptoComApi');

module.exports = (app) => {
    app.get('/crypto-orders', async (req, res) => {

        try {
        let data = await CryptoApiDirect.
        getOrderHistoryLoop("2022-05-01", 5);
        let result = (data);
        res.json( result );
        } catch (error) {
            console.log('error : ', error);
            res.json({ error });
        }
    }
    )
}


