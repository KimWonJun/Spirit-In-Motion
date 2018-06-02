const Post = require('../../models/post');

function getQuestionList(req, res) {
    let data = [];
    Post.find((err, response) => {
        if(err)
            return res.status(500).json({
                'result': 'failure'
            });
        response.forEach((post) => {
            data.push({
                id: post.id,
                writer: post.writer,
                title: post.title,
                conent: post.content
            });
        });
        res.status(200).json(data);
    });
}

function writeQuestion(req, res) {
    let currentTime = Date.now();
    console.log(currentTime);

    let newQuestion = new Post();

    newQuestion.id = currentTime;
    newQuestion.title = req.body.title;
    newQuestion.writer = req.body.writer;
    newQuestion.content = req.body.content;
    newQuestion.answers = [];

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
        .then((response) => {
            res.send(response);
        });
}

function writeAnswer(req, res) {
    Post.findOne({id: req.body.questionId})
        .then((res.find));
}

exports.getQuestionList = getQuestionList;
exports.writeQuestion = writeQuestion;
exports.getQuestionDetail = getQuestionDetail;
exports.writeAnswer = writeAnswer;