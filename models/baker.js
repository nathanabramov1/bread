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
}, { toJSON: { virtuals: true } })

// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})


const Baker = mongoose.model('Baker', bakerSchema)

module.exports = Baker