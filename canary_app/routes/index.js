var express = require('express');
const io = require('../socketapi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Beep boop hello'});
});
router.get('/birdhouse', function(req, res, next) {
  res.render('birdhouse');
});
router.get('/datavis', function(req, res, next) {
  res.render('datavis');
});

router.get('/learnmore', function(req, res, next) {
  res.render('learnmore');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
