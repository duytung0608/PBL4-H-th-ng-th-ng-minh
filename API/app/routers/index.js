var express = require('express');
var router = express.Router();
router.use('/forecasts', require('./forecasts'));
router.use('/accounts', require('./accounts'));
// router.use('/items', require('./items'));

module.exports = router;
