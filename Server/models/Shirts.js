const mongoose = require('mongoose')

const shirtsSchema = new mongoose.Schema({
    shirt: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("Shirts", shirtsSchema)