const Post = require('../../models/post');

function getQuestionList(req, res) {
    let data = [];
    Post.find((err, posts) => {
        if(err)
            return res.status(500).json({
                'result': 'failure'
            });
        posts.forEach((post) => {
            data.push({
                id: post._id,
                title: post.title,
                writer: post.writer,
                conent: post.content,
                answerCount: post.answers.lenght
            });
        });
        res.status(200).json(data);
    });
}

function writeQuestion(req, res) {
    let newQuestion = new Post();

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
    Post.findOne({_id: req.query.questionId}, (err, post) => {
        if(err)
            return res.status(500).json({
                'result': 'failure'
            });
        res.status(200).json(post);
    });
}

function writeAnswer(req, res) {
    let answer = {};

    answer.writer = req.body.writer;
    answer.content = req.body.conent;

    Post.findOneAndUpdate({_id: req.body.questionId}, {$push: {answers: answer}})
        .then(() => {
            res.status(200).json({'result': 'success'});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({'result': 'failure'});
        });
}

exports.getQuestionList = getQuestionList;
exports.writeQuestion = writeQuestion;
exports.getQuestionDetail = getQuestionDetail;
exports.writeAnswer = writeAnswer;