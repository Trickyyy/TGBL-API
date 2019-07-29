const router = require('express').Router();
const bans = require('../../controllers/bans.controller');
router.use('/', bans.addBan);

module.exports = router;