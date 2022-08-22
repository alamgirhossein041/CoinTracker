const sequelize = require('../../../db/sequelize');

module.exports = (app) => {
    app.get('/coinbase/init-db', async(req, res) => {

        let cmd = sequelize.initDB();

        cmd.then(() => {
        res.json({
            message: 'Reset coinbase token success'
        });
        }).catch(err => {
            res.json({
                message: 'Reset coinbase token failed'
            });
        }
        );
    });
}