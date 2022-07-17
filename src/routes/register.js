
const request = require('request');
const sequelize = require('../db/sequelize');

module.exports = (app) => {
    // console.clear();
    app.get('/register', async(req, res) => {

        let params = req;
        console.log(params);

          res.json({
                title: 'Registration Ok',
                // params: params
            });
        }

    );
}