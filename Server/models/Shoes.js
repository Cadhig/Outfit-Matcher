const mongoose = require('mongoose')

const shoesSchema = new mongoose.Schema({
    shoes: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("Shoes", shoesSchema)