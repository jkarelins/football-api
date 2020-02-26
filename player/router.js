// Player router
const { Router } = require("express");
const router = new Router();
const Player = require("./model");
const { Team } = require("../team/model");
const City = require("../city/model");

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

router.get("/teamname/:teamName", (req, res, next) => {
  const teamName = req.params.teamName;
  // Strange but it does not work!!!
  // Team.findOne({ where: { name: teamName }, include: [Player] })
  //   .then(team => {
  //     console.log(team);
  //     res.json(team);
  //   })
  //   .catch(next);
  Team.findOne({ where: { name: teamName } }).then(team => {
    Player.findAll({ where: { teamId: team.id } })
      .then(players => {
        res.json(players);
      })
      .catch(next);
  });
});

router.get("/cityname/:cityName", (req, res, next) => {
  const cityName = req.params.cityName;
  City.findOne({ where: { name: cityName } })
    .then(city => {
      Player.findAll({ where: { cityId: city.id } })
        .then(players => {
          res.json(players);
        })
        .catch(next);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Player.findByPk(req.params.id, {
    include: [Team, City]
  })
    .then(player => {
      if (player) {
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
