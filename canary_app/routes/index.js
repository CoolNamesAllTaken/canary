var express = require('express');
const io = require('../socketapi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Beep boop hello'});
});
router.get('/stream', function(req, res, next) {
  res.render('stream');
})

// Stream image
setInterval(() => {
  io.emit('image', 'some data');
}, 1000);

module.exports = router;
