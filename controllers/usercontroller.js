var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/createuser', function(req, res) {
    var username = req.body.user.username;
    var firstname =  req.body.user.firstname;
    var lastname = req.body.user.lastname;
    var email = req.body.user.email;
    var password = req.body.user.password; 

       User.create({
       username: username,
       firstname: firstname,
       lastname: lastname,
       email: email,
       passwordhash: bcrypt.hashSync(password, 10)
    })
    
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})

            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
        
    );
});

    router.post('/signin', function(req, res) {
        User.findOne({ where: { username: req.body.user.username}}).then(
            function(user) {
                if(user) {
                    bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches) {

                        if (matches) {
                            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*70*24});
                            res.json({
                                user: user,
                                message: "successfully authenticated",
                                sessionToken: token
                            });
                        } else {
                            res.status(502).send({ error: "failure"})
                        }
                    })
                } else {
                    res.status(500).send({ error: "failed to authenticate"})
                }
            },
            function(err) {
                res.status(501).send({error: "failure"})
            }
        );
    });

module.exports = router;