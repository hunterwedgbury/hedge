require("dotenv").config();

const {
  DB_LOCAL_USER,
  DB_LOCAL_PASSWORD,
  DB_LOCAL_NAME
} = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: DB_LOCAL_USER,
    password: DB_LOCAL_PASSWORD,
    database: DB_LOCAL_NAME,
    charset: "utf8",
  }
};