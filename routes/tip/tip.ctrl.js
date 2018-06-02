const Tip = require('../../models/tip');

function getTips(req, res) {
    Tip.find()
        .then((books) => {
            res.status(200).json(books);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                'result': 'failure'
            });
        });
}

exports.getTips = getTips;