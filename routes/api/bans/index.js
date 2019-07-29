const router = express.Router();
const checkToken = require('../../../middleware/checkToken');
const checkSuperUser = require('../../../middleware/checkSuperUser');
router.use('/getBanned', checkToken, require('./getBanned'));
router.use('/getBans', checkToken, require('./getBans'));
router.use('/addBan', checkSuperUser, require('./addBan'));

module.exports = router;