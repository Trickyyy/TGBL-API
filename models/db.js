
const Pool = require('pg').Pool;

const initializeTables = (pool) => {
    pool.query("CREATE TABLE IF NOT EXISTS bans(identification varchar PRIMARY KEY, isBanned boolean, banMessage varchar, expires TIMESTAMP);");
    console.log("DB Tables verified")
};
const init = () => {
    const pool = new Pool();
    initializeTables(pool);
    return pool;
};

module.exports = init();
