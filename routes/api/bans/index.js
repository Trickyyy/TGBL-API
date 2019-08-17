const express = require('express');
const router = express.Router();
const checkToken = require('../../../middleware/checkToken');
router.use('/isbanned', checkToken, require('./isbanned'));
router.use('/getbans', checkToken, require('./getbans'));
router.use('/add', checkToken, require('./add'));

module.exports = router;