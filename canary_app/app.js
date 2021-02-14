var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var favicon = require('serve-favicon');

var app = express();

// REDIS
var redis = require('redis');
const io = require('./socketapi');
var subscriber = redis.createClient("6379", "localhost");

// Messages received from any subscribed REDIS channel get blasted out to all
// clients over websockets.
subscriber.on("message", function(channel, message) {
  // console.log("Message " + message + " on channel " + channel + " has arrived!");
  io.emit(channel, message);
});

// These are the REDIS channels that the app subscribes to.
subscriber.subscribe("temperature:inside");
subscriber.subscribe("temperature:outside");
subscriber.subscribe("camera:inside");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;