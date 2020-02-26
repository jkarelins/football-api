const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const DB = require("./db");
const { Team } = require("./team/model");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`App is running on port ${port}!`));
