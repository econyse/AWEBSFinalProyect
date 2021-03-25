const { response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const { firestore, firebase, timestamp } = require('../firebase/config');

// for parsing application/json
router.use(bodyParser.json());

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', function (req, res) {
    res.sendFile(path.resolve('Public/index.html'));
})

router.route('/register')
    .get(function (req, res) {
        res.sendFile(path.resolve('Public/register.html'));
    })
    .post(function (req, res) {
        firebase.auth().createUserWithEmailAndPassword(req.body.user, req.body.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(userCredential)
                console.log(user)
                // ...
                res.send('user created')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                res.send('user not created')
                // ..
            });
    });

router.post('/login', function (req, res) {
    console.log(req.body);
    res.send('error');
});

module.exports = router