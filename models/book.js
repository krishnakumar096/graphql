const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
}, { versionKey: false })

module.exports = new mongoose.model('book', bookSchema);