const mongoose = require('mongoose')

const pantsSchema = new mongoose.Schema({
    pants: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("Pants", pantsSchema)