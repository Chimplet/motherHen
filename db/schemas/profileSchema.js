const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const profileSchema = mongoose.Schema({
    guildId: reqString,
    userId: reqString,
    eggs: {
        type: Number,
        required: true
    },
    ferteggs: {
        type: Number,
        required: true
    },
    inventory: {
    }
})

module.exports = mongoose.model('profiles', profileSchema)