const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const chickensSchema = mongoose.Schema({
    guildId: reqString,
    Name: {
        type: String,
        required: true
    },
    Health: {
        type: Number,
        required: true
    },
    Defense: {
        type: Number,
        required: true
    },
    Speed: {
        type: Number,
        required: true
    },
    Damage: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    
})

module.exports = mongoose.model('chickens', chickensSchema)
