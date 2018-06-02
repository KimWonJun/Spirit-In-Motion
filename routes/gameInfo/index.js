const express = require('express');
const router = express.Router();
const ctrl = require('./gameInfo.ctrl');

router.get('/', ctrl.getGameInfo);

module.exports = router;