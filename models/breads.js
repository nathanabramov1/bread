// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: { type: Boolean, required: true },
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: { type: String, enum: ["Monica", "Rachel", "Ross", "Joey", "Phoebe", "Chandler"] }
})

// custom helper methods for instances of "bread"
breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with ${["passion","love","fury","sarcasm","delight","amusement"][Math.floor(Math.random()*6)]} by ${this.baker}`
  }

breadSchema.methods.freshness = function(){
    return `Baked ${Math.floor(Math.random()*18) + 1} minutes ago.`
  }
  
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
