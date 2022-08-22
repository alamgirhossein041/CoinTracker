
const request = require('request');
const sequelize = require('../db/sequelize');
const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')

module.exports = (app) => {
    // console.clear();
    try {
        app.post('/register', async (req, res) => {

            let params = req.body;
            console.log(params);

            // hash password
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(params.password, salt);

            // insert new user in DB 
            let user = await User.create({
                name: params.username,
                email: params.email,

                password: hash,
                id_coinbase: 'null'
            });
    
            console.log(user);
            if (user) {
                res.json({
                    success: true,
                    message: 'User created successfully'
                });
            } else {
                // user deja existant
                res.json({
                    success: false,
                    message: 'User already exists'
                });
            }

            res.json({
                title: 'Registration Ok',
                params: params
            });

        }

        );
    } catch (error) {
        console.log(error);
    }
}