var express = require('express');
var data= require('../videodata.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'My Site',
      videodata: data

  });
});

module.exports = router;
