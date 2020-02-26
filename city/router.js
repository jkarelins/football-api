const { Router } = require("express");
const router = new Router();
const City = require("./model");

router.get("/", (req, res, next) => {
  City.findAll()
    .then(cities => res.json(cities))
    .catch(next);
});

router.post("/", (req, res, next) => {
  City.create(req.body)
    .then(city => res.json(city))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  City.findByPk(req.params.id)
    .then(city => {
      if (city) {
        res.json(city);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  City.findByPk(req.params.id)
    .then(city => {
      if (city) {
        city
          .update(req.body)
          .then(city => res.json(city))
          .catch(next);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
