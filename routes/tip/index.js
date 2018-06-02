const express = require('express');
const router = express.Router();
const ctrl = require('./tip.ctrl');

router.get('/', ctrl.getTips);

module.exports = router;