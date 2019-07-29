const router = require('express').Router();
const tokens = require('../../controllers/tokens.controller');
router.use('/', tokens.generateToken);

module.exports = router;