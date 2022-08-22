const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key.js')

module.exports = (app) => {
    app.post('/login', (req, res) => {
        console.log(req.body);

        User.findOne({ where: { name: req.body.name } }).then(user => {

            if (!user) {
                console.log('User not found');
                return res.status(401).send({ error: 'Invalid username or password' })
            } else {
                console.log('Good user' );
            }

            bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
                if (isPasswordValid) {

                    const token = jwt.sign({ id: user.id }, privateKey, { expiresIn: '24h' })

                    const message = `L'utilisateur a été connecté avec succès`;
                    return res.json({ message, data: user , token: token });
                } else {
                    return res.status(401).send({ error: 'Invalid username or password' })
                }
            }).catch(error => {
                console.log(error);
                return res.status(401).send({ error: 'Invalid  2 username or password' })
            })
        })
       
    })
}
