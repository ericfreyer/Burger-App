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
      res.redirect("/index");
  });
});

router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
module.exports = router;