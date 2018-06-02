const Users = require('../../models/user');

function signIn(req, res) {
    Users.findOne({
        id: req.body.id
    }, (err, user) => {
        if (err) {
            res.sendStatus(500);
        } else if (user === null) {
            res.sendStatus(405);
        } else if (user.pw === req.body.pw) {
            res.status(200).json({
                name: user.name,
                phoneNum: user.phoneNum
            });
        } else {
            res.sendStatus(405);
        }
    });
}

function signUp(req, res) {
    let newUser = new Users();

    console.log(req.body);

    newUser.name = req.body.name;
    newUser.id = req.body.id;
    newUser.pw = req.body.pw;

    Users.findOne({
        id: req.body.id
    }, (err, user) => {
        if (err) {
            res.sendStatus(500);
        } else if (user === null) {
            newUser.save((err) => {
                if (err) {
                    res.sendStatus(500);
                    return;
                } else {
                    res.sendStatus(200);
                }
            });
        } else {
            res.sendStatus(405);
        }
    });
}

exports.signIn = signIn;
exports.signUp = signUp;