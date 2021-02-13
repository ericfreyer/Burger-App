const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
      console.log(result);
      res.redirect("/");
  });
});

  router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    // console.log(id);
    burger.updateOne("devoured", true, id, function(results){
        res.json(results);
    });
});

module.exports = router;