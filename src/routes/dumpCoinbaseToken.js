const sequelize = require('../db/sequelize');

module.exports = (app) => {
    app.get('/reset-coinbase-token', async(req, res) => {

        await sequelize.coinbaseTokenDestroy();
        res.json({
            message: 'Reset coinbase token success'
        });
    });
}