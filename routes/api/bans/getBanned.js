const router = require('express').Router();
const bans = require('../../../controllers/bans.controller');
router.get('/', bans.getBanned);

module.exports = router;