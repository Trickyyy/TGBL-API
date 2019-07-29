
const Pool = require('pg').Pool;
function init() {
    const pool = new Pool({});
    return pool;
}

module.exports = init();
