const { Router } = require("express");
const router = new Router();
const { Team } = require("./model");
const { City } = require("../city/model");

// router.get("/", (req, res) => res.redirect("/team"));

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => res.json(teams))
    .catch(err => next(err));
});

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(newTeam => {
      res.json(newTeam);
    })
    .catch(err => res.status(404).end());
});

router.get("/team/:id", (req, res, next) => {
  const id = req.params.id;
  Team.findByPk(id, { include: [City] })
    .then(team => {
      if (team) {
        res.json(team);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.put("/team/:id", (req, res, next) => {
  const id = req.params.id;
  Team.findByPk(id)
    .then(team => {
      if (team) {
        return team
          .update({
            ...team,
            name: req.body.name
          })
          .then(team => res.json(team))
          .catch(next);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
