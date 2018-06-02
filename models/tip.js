const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    pic: {type: String, default: 'https://image.flaticon.com/icons/svg/34/34322.svg'},
    title: String,
    writer: String,
    content: String
});

module.exports = mongoose.model('tips', postSchema);