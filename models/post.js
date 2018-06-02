const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    writer: String,
    content: String,
    answers: Array,
    Date: Date
});

module.exports = mongoose.model('posts', postSchema);