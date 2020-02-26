const Sequelize = require("sequelize");
const db = require("../db");
const Team = db.define(
  "team",
  {
    name: {
      type: Sequelize.STRING
      // field: "team_name"
    }
  }
  // { tableName: "football_teams" }
  // You can also determine the name of the table by passing an another object argument
  // with a tableName property to define
);

module.exports = { Team };
