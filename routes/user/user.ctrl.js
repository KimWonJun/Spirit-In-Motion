const User = require('../../models/user');

function signIn(req, res) {
    User.findOne({ id: req.body.id })
        .then((user) => {
            if (user === null) {
                res.status(405).json({
                    'result': 'failure'
                });
            } else if (user.pw === req.body.pw) {
                res.status(200).json({
                    'result': 'success'
                });
            } else {
                res.status(405).json({
                    'result': 'failure'
                });
            }
        })
        .catch((err) => {
            if(err){
                res.status(500).json({
                    'result': 'failure'
                });
            }
        });
}

function signUp(req, res) {
    let newUser = new User();

    newUser = req.body;
    User.findOne({ id: req.body.id })
        .then((err, user) => {
            if (err) {
                res.status(500).json({
                    'result': 'failure'
                });
            } else if (user === null) {
                newUser.save((err) => {
                    if (err) {
                        res.status(500).json({
                            'result': 'failure'
                        });
                        return;
                    } else {
                        res.status(200).json({
                            'result': 'success'
                        });
                    }
                });
            } else {
                res.status(405).json({
                    'result': 'failure'
                });
            }
        });
}

exports.signIn = signIn;
exports.signUp = signUp;