const express = require('express');
const router = express.Router();

const ctrl = require('./qna.ctrl');

router.get('/', ctrl.getQuestionList);
router.post('/newQuestion', ctrl.writeQuestion);
router.get('/:id', ctrl.getQuestionDetail);
router.post('/:id/answer', ctrl.writeAnswer);

module.exports = router;