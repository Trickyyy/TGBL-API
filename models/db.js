
const Pool = require('pg').Pool;

const initializeTables = (pool) => {
    pool.query("CREATE TABLE IF NOT EXISTS bans(identification varchar PRIMARY KEY, banIssuer varchar, isBanned boolean, expires TIMESTAMP;");
};
const init = () => {
    const pool = new Pool();
    initializeTables(pool);
    return pool;
};

module.exports = init();
