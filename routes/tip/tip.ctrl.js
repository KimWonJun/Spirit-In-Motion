const Tip = require('../../models/tip');

function getTips(req, res) {
    Tip.find()
        .then((tips) => {
            res.status(200).json(tips);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                'result': 'failure'
            });
        });
}

exports.getTips = getTips;