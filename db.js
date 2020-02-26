const { Sequelize } = require("sequelize"); //Maybe without {}
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("\x1b[32m", "DB updated"))
  .catch(() => console.log("Error updating table"));

module.exports = db;
