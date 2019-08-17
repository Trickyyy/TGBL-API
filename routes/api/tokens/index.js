const router = require('express').Router();
const checkSuperUser = require('../../../middleware/checkSuperUser');
router.use('/generate', checkSuperUser, require('./generate'));

module.exports = router;