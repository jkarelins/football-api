// Player router
const { Router } = require("express");
const router = new Router();
const Player = require("./model");
const { Team } = require("../team/model");

router.get("/", (req, res, next) => {
  Player.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  console.log(Team);

  Player.findByPk(req.params.id, {
    include: [Team]
  })
    .then(player => {
      if (player) {
        console.log("player was found");
        res.json(player);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  Player.findByPk(req.params.id)
    .then(player => {
      if (player) {
        player
          .update(req.body)
          .then(player => res.json(player))
          .catch(next);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
