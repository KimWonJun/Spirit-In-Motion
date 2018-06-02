const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    pic: {type: String, default: 'https://spirit-in-motion.herokuapp.com/tip/defaultPic'},
    title: String,
    writer: String,
    content: String
});

module.exports = mongoose.model('tips', postSchema);