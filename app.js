var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('./middleware/cors')

var indexRouter = require('./routes/index');
var cashProcess = require('./routes/cashProcess');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cashProcess);
app.use('/users', usersRouter);

module.exports = app;
