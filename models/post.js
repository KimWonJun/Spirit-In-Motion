const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: Number,
    title: String,
    writer: String,
    content: String,
    answers: Array
});

module.exports = mongoose.model('posts', postSchema);