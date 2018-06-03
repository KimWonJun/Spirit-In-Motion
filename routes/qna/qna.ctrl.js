const Post = require('../../models/post');

function getDateNotice(gap) {
    gap = parseInt(gap, 10);
    console.log(gap);
    if(gap < 60 * 1000)
        return '방금 전';
    else if(gap < 3600 * 1000)
        return `${gap / (60 * 1000)}분 전`;
    else if(gap < 86400 * 1000)
        return `${gap / (3600 * 1000)}시간 전`;
    else
        return '오래된 게시물';
}

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
                writer: post.writer,
                content: post.content,
                date: getDateNotice(Date.now() - post.date)
            });
        });
        res.status(200).json(data);
    });
}

function writeQuestion(req, res) {
    let newQuestion = new Post();

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
    Post.findOne({_id: req.params.id}, (err, post) => {
        if(err)
            return res.status(500).json({
                'result': 'failure'
            });
        post.answers.forEach((answer) => {
            answer.date = getDateNotice(Date.now() - answer.date);
        });
        res.status(200).json(post);
    });
}

function writeAnswer(req, res) {
    let answer = {};

    answer.writer = req.body.writer;
    answer.content = req.body.conent;
    answer.date = Date.now();

    Post.findOneAndUpdate({_id: req.params.id}, {$push: {answers: answer}})
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