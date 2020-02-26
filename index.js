const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const teamRouter = require("./team/router");
const DB = require("./db");
const { Team } = require("./team/model");

app.use(jsonParser);
app.use(teamRouter);

app.listen(port, () => console.log(`App is running on port ${port}!`));
