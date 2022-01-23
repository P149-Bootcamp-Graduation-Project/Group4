const config = require("../configs/config");
const pgp = require('pg-promise')(/* options */);

let cn = `postgres://${config.postgresConfig.db_username}:${config.postgresConfig.db_password}@${config.postgresConfig.db_host}:${config.postgresConfig.db_port}/${config.postgresConfig.db_name}`;
try {
    const db = pgp(cn);
    module.exports = { db };
} catch(error) {
    throw new Error("Cannot connect PostgreSQL");
}


