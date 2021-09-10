const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const itemSchema = mongoose.Schema({
    guildId: reqString,
    itemId: reqString,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    
})

module.exports = mongoose.model('items', itemSchema)