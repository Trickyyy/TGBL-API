const router = require('express').Router();
router.use('/bans', require('./bans'));
router.use('/tokens', require('./tokens'));

module.exports = router;