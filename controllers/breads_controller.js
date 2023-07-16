const express = require('express')
const breads = express.Router()
const BreadData = JSON.parse(require('../models/breadData.js'))
const Bread = require('../models/breads')

// INDEX
breads.get('/', (req, res) => {
    Bread.find()
      .then((response) => {
        console.log(response)
        res.render('index',
          {
            breads: response,
            title: 'Index Page'
          }
        )
      })
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  console.log(req.body)
  Bread.create(req.body)
  res.redirect('/breads')
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: BreadData[req.params.indexArray],
    index: req.params.indexArray
  })
})

// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          console.log(foundBread)
          res.render('show', {
              bread: foundBread
          })
      })
})

// breads.get('/:arrayIndex', (req, res) => {
//   if (BreadData[req.params.arrayIndex]) {
//     res.render('show', {
//       bread: BreadData[req.params.arrayIndex],
//       index: req.params.arrayIndex
//     })
//   } else {
//     res.render('404')
//   }
// })

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  BreadData[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})

// DELETE
breads.delete('/:arrayIndex', (req, res) => {
  BreadData.splice(req.params.arrayIndex, 1)
  res.status(303).redirect('/breads')
})

module.exports = breads
