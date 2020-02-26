const { Sequelize } = require("sequelize"); //Maybe without {}
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync() //.sync({ force: true }) confirms that it's OK to force changes in previously created tables, even though it results in data loss.
  .then(() => console.log("\x1b[32m", "DB updated"))
  .catch(() => console.log("Error updating table"));

module.exports = db;
