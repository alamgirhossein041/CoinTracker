
const CryptoComApi = require('../../api/CryptoComApi');


module.exports = (app) => {
    app.get('/crypto-com/wallet', async (req, res) => {

        try {
        let data = await CryptoComApi.
        getAccountSummary();
        
        let result = JSON.parse(data);
        result = result['result']['accounts'];
        // filter balance > 0
        let balance = result.filter(item => item.balance > 0)

        res.json( balance );
        } catch (error) {
            console.log('error : ', error);
            res.json({ error });
        }

    }
    )
}


