const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    lat: String,
    lng: String,
    placeName: String
});

module.exports = mongoose.model('places', placeSchema);