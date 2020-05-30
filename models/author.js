const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number
}, { versionKey: false })

module.exports = new mongoose.model('author', authorSchema);