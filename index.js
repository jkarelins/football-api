const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");

app.use(jsonParser);
app.use(teamRouter);
app.use("/player", playerRouter);

app.listen(port, () => console.log(`App is running on port ${port}!`));
