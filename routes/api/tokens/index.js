const router = require('express').Router();
const checkSuperUser = require('../../middleware/checkSuperUser');
router.use('/generateToken', checkSuperUser, require('./generateToken'));

module.exports = router;