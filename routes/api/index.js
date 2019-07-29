const router = require('express').Router();
const checkToken = require('../../middleware/checkToken');
router.use('/getBanned', checkToken, require('./getBanned'));
router.use('/getBans', checkToken, require('./getBans'));

module.exports = router;