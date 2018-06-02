const express = require('express');
const router = express.Router();
const ctrl = require('./placeSerach.ctrl');

router.get('/', ctrl.getPlaces);
router.post('/', ctrl.addPlace);

module.exports = router;