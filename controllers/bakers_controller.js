// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')

baker.get('/', (req, res) => {
    Baker.find()
    .then(foundBakers => {
        res.send(foundBakers)
    })
})

// export
module.exports = baker                   
