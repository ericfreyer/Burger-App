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

router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId, burger_name: result.insertId });
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