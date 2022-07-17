const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key.js')


module.exports = (app) => {
    app.post('/login', (req, res) => {
        console.log(req.body);

        User.findOne({ where: { name: req.body.name } }).then(user => {

            if (!user) {
                res.status(401).send({ error: 'Invalid username or password' })
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
                return res.status(401).send({ error: 'Invalid  2 username or password' })
            })
        })
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU4MDUyNDc1LCJleHAiOjE2NTgwODg0NzV9.lq5PTHhM7INAzo3MP9DspajtFXxGSh1nKOq_UwKKNnQ
    })
}

// {
//     "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU4MDUyNDc1LCJleHAiOjE2NTgwODg0NzV9.lq5PTHhM7INAzo3MP9DspajtFXxGSh1nKOq_UwKKNnQ"
//     }