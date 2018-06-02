const express = require('express');
const router = express.Router();
const ctrl = require('./place.ctrl');

router.get('/', ctrl.getPlaces);
router.post('/', ctrl.addPlace);

module.exports = router;