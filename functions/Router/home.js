const { response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const { firestore, firebase, timestamp } = require('../firebase/config');
const { send } = require('process');

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
    res.sendFile(path.join(__dirname, '/Public/index.html'));
})

router.get('/:uid/home', function (req, res) {
    res.sendFile(path.join(__dirname, '/Public/home.html'))
})

router.route('/register')
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, '/Public/register.html'));
    })

router.get('/logout', function (req, res) {
    res.sendFile(path.join(__dirname, '/Public/logout.html'));
})

module.exports = router