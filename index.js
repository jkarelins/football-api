const express = require("express");
const app = express();
const teamRouter = require("./team/router");

const port = process.env.PORT || 4000;
const DB = require("./db");
const { Team } = require("./team/model");

app.use(teamRouter);

app.listen(port, () => console.log(`App is running on port ${port}!`));
