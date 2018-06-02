const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    writer: String,
    content: String,
    answers: Array,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('posts', postSchema);