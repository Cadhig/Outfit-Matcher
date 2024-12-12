const mongoose = require('mongoose')

const closetSchema = new mongoose.Schema({
    accessories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accessories' }],
    shirts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shirts' }],
    pants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pants' }],
    shoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shoes' }]
})

module.exports = mongoose.model("Closet", closetSchema)