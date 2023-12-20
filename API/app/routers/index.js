var express = require('express');
var router = express.Router();
router.use('/accounts', require('./accounts'));
module.exports = router;
