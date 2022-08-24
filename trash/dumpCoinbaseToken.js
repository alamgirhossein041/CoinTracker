const coinbaseDB = require('../src/db/coinbase');

module.exports = (app) => {
    app.get('/coinbase/reset-token-list', async(req, res) => {

        let cmd = coinbaseDB.tokenDestroy();

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