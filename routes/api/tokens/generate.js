const router = require('express').Router();
const tokens = require('../../../controllers/tokens.controller');
router.post('/', tokens.generate);

module.exports = router;