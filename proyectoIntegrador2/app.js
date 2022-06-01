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

//lo q viene de un form se captura en forma de OL
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//session
const session = require('express-session');
app.use (session(
  {secret: 'mensaje',
  resave: save,
  saveUninitialized: true}
));
//header logueado y deslogueado
app.use(function(req,res,next){
    if(req.session.UsuarioLogueado != undefined){
      res.locals.user = req.session.usuarioLoguedo}
      return next();
    });

//se estan requiriendo los modulos propios que estamos exportnado en los otros archivos
const indexRouter = require('./routes/index');
const productoRouter = require('./routes/producto');
const usuarioRouter = require('./routes/usuario');

//estos son los prefijos
app.use('/', indexRouter);
app.use('/producto', productoRouter);
app.use('/usuario', usuarioRouter);

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


