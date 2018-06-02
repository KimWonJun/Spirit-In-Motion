const express = require('express');
const router = express.Router();
const ctrl = require('./tip.ctrl');

router.get('/', ctrl.getTips);
router.use('/defaultPic', express.static('../../public/seo-tips-interface-symbol.png'));

module.exports = router;