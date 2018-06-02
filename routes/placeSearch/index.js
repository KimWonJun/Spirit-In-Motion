const express = require('express');
const router = express.Router();
const ctrl = require('./placeSerach.ctrl');

router.get('/getPlaces', ctrl.getPlaces);
router.post('/addPlace', ctrl.addPlace);

module.exports = router;