const express = require('express');
const router = express.Router();

const ctrl = require('./qna.ctrl');

router.get('/', ctrl.getQuestionList);
router.post('/', ctrl.writeQuestion);
router.get('/:id', ctrl.getQuestionDetail);
router.post('/:id', ctrl.writeAnswer);

module.exports = router;