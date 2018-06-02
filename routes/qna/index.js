const express = require('express');
const router = express.Router();

const ctrl = require('./qna.ctrl');

router.get('/', ctrl.getQuestionList);
router.post('/writeQuestion', ctrl.writeQuestion);
router.get('/getQuestionDetail', ctrl.getQuestionDetail);
router.post('/writeAnswer', ctrl.writeAnswer);