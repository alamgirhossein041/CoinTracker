const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key.js')


module.exports = (app) => {
    app.post('/login', (req, res) => {

        User.findOne({ where: { username: req.body.username } }).then(user => {

            if (!user) {
                res.status(401).send({ error: 'Invalid username or password' })
            }

            bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
                if (isPasswordValid) {

                    const token = jwt.sign({ id: user.id }, privateKey, { expiresIn: '10h' })

                    const message = `L'utilisateur a été connecté avec succès`;
                    return res.json({ message, data: user })
                } else {
                    return res.status(401).send({ error: 'Invalid username or password' })
                }
            }).catch(error => {
                return res.status(401).send({ error: 'Invalid username or password' })
            })
        })
    })
}