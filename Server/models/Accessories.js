const mongoose = require('mongoose')

const accessoriesSchema = new mongoose.Schema({
    accessories: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("Accessories", accessoriesSchema)