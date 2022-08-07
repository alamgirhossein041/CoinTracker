const sequelize = require('../../db/sequelize');

module.exports = (app) => {
    app.get('/coinbase/reset-token', async(req, res) => {

        await sequelize.coinbaseTokenDestroy();
        res.json({
            message: 'Reset coinbase token success'
        });
    });
}