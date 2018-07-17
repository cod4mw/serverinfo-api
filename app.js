var express = require('express');
var cors = require('cors')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var errorsRouter = require('./routes/errors');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/errors', errorsRouter);
app.use('/', indexRouter);

// Catch 404
app.use((req, res, next) => {
  res.json({
    error: '404',
    message: 'Not Found'
  });
});

module.exports = app;
