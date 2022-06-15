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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ejecutamos session
const session = require('express-session');
app.use(session(
  {
    secret: 'mensaje',
    resave: false,
    saveUninitialized: true
  }
));
//creo variable que contiene mis usuarios

/*app.use(function(req,res,next){
  res.locals.usuario = {
    usuario: req.session.Users.userName}
  return next();
})*/
//header logueado y deslogueado
app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user
  }
  return next();
});

app.use(function (req, res, next) {
  if (req.cookies.UserId != undefined && req.session.user == undefined) {
    let userId= req.cookies.userId;
    User.findByPk(userId)
      .then(function (user) {
        req.session.user = user
        res.locals.user = user
      })
      .catch()
  }
  return next();
})


//se estan requiriendo los modulos propios que estamos exportnado en los otros archivos
const indexRouter = require('./routes/index');
const productoRouter = require('./routes/producto');
const usuarioRouter = require('./routes/usuario');
const  comentariosRouter = require('./routes/comentarios');

//estos son los prefijos
app.use('/', indexRouter);
app.use('/producto', productoRouter);
app.use('/usuario', usuarioRouter);
app.use('/comentarios', comentariosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


