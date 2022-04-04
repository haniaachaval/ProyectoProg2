const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//se estan requiriendo los modulos propios que estamos exportnado en los otros archivos
const indexRouter = require('./routes/index');
const estadoRouter = require('./routes/estado');
const modeloRouter = require('./routes/modelo');

//estos son los prefijos
app.use('/', indexRouter);
app.use('/estado', estadoRouter);
app.use('/modelo', modeloRouter);
app.use('/marcas', modeloRouter);
app.use('/color', modeloRouter);

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

//Creo variable que contiene mis ruta
let rutasMarcas = require("./routes/marca.js");
//avisar quien se va a ocupar de responder
app.use('/marca', rutasMarcas);
 
let rutasColor = require("./routes/color.js");
//avisar quien se va a ocupar de responder
app.use('/color', rutasColor);

module.exports = app;


