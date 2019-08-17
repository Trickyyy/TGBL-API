const router = require('express').Router();
const bans = require('../../../controllers/bans.controller');
router.post('/', bans.addBan);

module.exports = router;