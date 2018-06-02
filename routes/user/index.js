const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

router.post('/signIn', ctrl.signIn);
router.post('/signup', ctrl.signUp);

module.exports = router;