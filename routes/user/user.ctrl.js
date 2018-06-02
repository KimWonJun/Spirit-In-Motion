const Users = require('../../models/user');

function signIn(req, res) {
    Users.findOne({
        id: req.body.id
    }, (err, user) => {
        if (err) {
            res.status(500).json({
                'result': 'failure'
            });
        } else if (user === null) {
            res.status(405).json({
                'result': 'failure'
            });
        } else if (user.pw === req.body.pw) {
            res.status(200).json({
                'result': 'success'
            })
        } else {
            res.status(405).json({
                'result': 'failure'
            });
        }
    });
}

function signUp(req, res) {
    let newUser = new Users();

    console.log(req.body);

    newUser = req.body;
    Users.findOne({
        id: req.body.id
    }, (err, user) => {
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