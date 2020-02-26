const { Router } = require("express");
const router = new Router();
const { Team } = require("./model");

router.get("/", (req, res) => res.send("Hello World!"));

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => res.json(teams))
    .catch(err => next(err));
  // res.send("all teams");
});

module.exports = router;
