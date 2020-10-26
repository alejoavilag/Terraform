const express = require('express')
const config = require('./config/config')

const app = express()


app.get('/api/res', function(req,res) {
    const response = 'terraformHeroku'
    res.json({response})
    console.log(response)
})

app.listen(config.port, function(){
    console.log(`app listen http://localhost:${config.port}`)
})