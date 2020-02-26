const { Router } = require("express");
const router = new Router();
const { Team } = require("./model");

// router.get("/", (req, res) => res.redirect("/team"));

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => res.json(teams))
    .catch(err => next(err));
  // res.send("all teams");
});

router.post("/team", (req, res, next) => {
  // console.log(req.body);
  Team.create(req.body)
    .then(newTeam => {
      // console.log(newTeam);
      res.json(newTeam);
    })
    .catch(err => res.status(404).end());
  res.status(200).end();
});

module.exports = router;
