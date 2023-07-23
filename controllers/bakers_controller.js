// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')

// baker.get('/', (req, res) => {
//     Baker.find()
//     .populate('breads')
//     .then(foundBakers => {
//         res.send(foundBakers)
//     })
// })

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})


// export
module.exports = baker                   
