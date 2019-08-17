const router = require('express').Router();
const bans = require('../../../controllers/bans.controller');
router.get('/', bans.isBanned);

module.exports = router;