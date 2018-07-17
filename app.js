var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// Catch 404
app.use((req, res, next) => {
  res.json({
    error: '404',
    message: 'Not Found'
  });
});

module.exports = app;
