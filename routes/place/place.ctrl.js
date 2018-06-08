const Place = require('../../models/place');

function getPlaces(req, res) {
    Place.find()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                'result': 'failure'
            });
        });
}

function addPlace(req, res) {
    let newPlace = new Place();

    newPlace.lat = req.body.lat;
    newPlace.lng = req.body.lng;
    newPlace.placeName = req.body.placeName;

    newPlace.save((err) => {
        if (err)
            return res.status('500').json({
                'result': 'failure'
            });
        res.status('200').json({
            'result': 'success'
        });
    });
}

exports.getPlaces = getPlaces;
exports.addPlace = addPlace;