const Post = require('../../models/post');

function getQuestionList(req, res) {
    let data = {};
    Post.find()
        .then((res) => {
            console.log(res);
        });

    res.json(data);
}

function writeQuestion(req, res) {
    let currentTime = Date.now();
    console.log(currentTime);

    let newQuestion = new Post();

    newQuestion.id = currentTime;
    newQuestion = req.body;

    newQuestion.save((err) => {
        if(err)
            return res.status('500').json({
                'result': 'failure'
            });
        res.status('200').json({
            'result': 'success'
        });
    });
}

function getQuestionDetail(req, res) {
    let data = {};
    Post.findOne({id: req.query.questionId})
        .then((res) => {
            console.log(res);
        });
    res.send(data);
}

function writeAnswer(req, res) {
    Post.findOne({id: req.body.questionId})
        .then();
}

exports.getQuestionList = getQuestionList;
exports.writeQuestion = writeQuestion;
exports.getQuestionDetail = getQuestionDetail;
exports.writeAnswer = writeAnswer;