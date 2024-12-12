const mongoose = require('mongoose')

function formatDate(createdAt) {
    return createdAt.toString()
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        get: formatDate
    },
    closet: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Closet' }]
})

module.exports = mongoose.model("User", userSchema)