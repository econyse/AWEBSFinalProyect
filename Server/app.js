const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const homeRouter = require('./Router/home');

app.use('/', homeRouter)

app.use('/js', express.static(path.resolve('Public/js')))
app.use('/css', express.static(path.resolve('Public/css')))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})