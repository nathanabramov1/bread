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

baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
        .then(deletedBaker => {
            // console.log(deletedBaker)
            res.redirect('/breads')
        })
})


// export
module.exports = baker                   
