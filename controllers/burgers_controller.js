const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
});

router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
      res.redirect('/');
    });
  });

  router.post('/burger/eat', function (req, res) {
    burger.updateOne(req.body.id, function() {
      res.redirect('/');
    });
  });

module.exports = router;