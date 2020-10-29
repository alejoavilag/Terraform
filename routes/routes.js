const express = require('express')

const router = express.Router()

router.get('/', function(req,res) {
    const response = 'CI/CD deploy actualizacion get ultima'
    console.log('get')
    res.status(200).json({response})
})

router.post('/', async function(req,res) {
    const {body, headers} = req
    console.log('post')
    res.status(201).json({headers, body})
})

module.exports = router