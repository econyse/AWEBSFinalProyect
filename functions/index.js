const functions = require("firebase-functions");

const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const homeRouter = require('./Router/home');

app.use('/', homeRouter)

app.use('/js', express.static(path.join(__dirname, '/Public/js')))
app.use('/css', express.static(path.join(__dirname, '/Public/css')))

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.app = functions.https.onRequest(app);