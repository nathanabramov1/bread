const mongoose = require('mongoose')
const { Schema } = mongoose

const bakerSchema = new Schema({
    name: { 
        type: String,
        required: true,
        enum: [
            "Monica", 
            "Rachel", 
            "Ross", 
            "Joey", 
            "Phoebe", 
            "Chandler"
        ]
    },
    startDate: {type: Date, required: true},
    bio: {type: String}
})

const Baker = mongoose.model('Baker', bakerSchema)

module.exports = Baker