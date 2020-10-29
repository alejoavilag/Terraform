const express = require('express')
const config = require('./config/config')
const bodyparser = require('body-parser')

const router = require('./routes/routes')

const app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/api/test', router)

app.listen(config.port, function(){
    console.log(`app listen http://localhost:${config.port}`)
})