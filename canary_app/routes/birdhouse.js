var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
  res.render('your-birdhouse', { title: 'birddds', message: 'Beep boop hello'});
});

module.exports = router;
