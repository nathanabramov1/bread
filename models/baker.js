const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

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
// essentially Bread.find({ baker: thisParticularBaker.id })
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// hooks 
bakerSchema.pre('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id})
        .then(deletedBreads => {
            console.log(deletedBreads)
        })
})            

const Baker = mongoose.model('Baker', bakerSchema)

module.exports = Baker