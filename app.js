var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var serveStatic = require('serve-static')
var finalhandler = require('finalhandler');
var fs = require('fs');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var fileRouter = require('./routes/file');



// var serve = serveStatic(staticBasePath, {'index': false});



var app = express();
var staticBasePath = './static';

// app.use(serveStatic(staticBasePath, {'index': false}))

// var server = http.createServer(function(req, res){
//   var done = finalhandler(req, res);
//   serve(req, res, done);
// })



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require("./routes/index.js")(app);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/file', fileRouter);




module.exports = app;
