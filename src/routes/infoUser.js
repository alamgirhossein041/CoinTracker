const coinbaseApi = require('../api/coinbaseApi');
const request = require('request');
// const sequelize = require('../db/sequelize');
// const auth = require('../auth/auth');

module.exports = (app) => {
    // app.get('/user', auth, (req, res) => {
        app.get('/user', (req, res) => {
        function getUser() {
            return new Promise((resolve, reject) => {
                const options = coinbaseApi.builOptionsRequest('/v2/user');
                request(options, function(error, response) {
                    if (error) {
                        console.log('error:', error);
                        reject(error);
                    }
                    let data = JSON.parse(response.body);
                    resolve(data);
                })
            })
        }
        getUser().then(user => {
            res.json({
                id: user.data.id,
                name: user.data.name,
                data: user.data
            });
        }).catch(error => {
            res.json({ error: error });
        });

    });
}