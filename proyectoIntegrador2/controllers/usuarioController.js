//const usuarios = require("../db/usuario");
const db = require("../database/models");
const User = db.User
const bcrypt = require('bcryptjs');

const usuarioController = {
    usuario: function (req, res) {
        User.findAll()
            .then(function (usuarios) {
                return res.render ('profile');
            });
    },
    registro: function (req, res) {
        return res.render('register');
    },

    store: function (req, res) {
        //detectar errores, situaciones irregulares
        let errores = {}
        //chequear que el email no este vacio
        if (req.body.email == '') {
            errores.message = 'Completar el campo email';
            res.locals.errores = errores;
            return res.render('register');
        } else if (req.body.password == '') {
            errores.message = 'Completar el campo password';
            res.locals.errores = errores;
            return res.render('register');
        } else if (req.body.password.length < 3 ) {
            errores.message = 'La constraseña debe tener más de tres caracteres';
            res.locals.errores = errores;
            return res.render('register');
        }else {
            //chequear que elemail no exista en la base
            User.findOne({
                where: [{ email: req.body.email }]
            })
                .then(function (user) {
                    if (user !== null) {
                        errores.message = 'El email ya existe, elija uno nuevo';
                        res.locals.errores = errores;
                        return res.render('register');
                    } else {
                        let user = {
                            userName:req.body.name,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            birth_date: req.body.cumple,
                            image: req.file.filename,
                        }

                        User.create(user)
                            .then(function (userGuardado) {
                                return res.redirect('/')
                            })
                            .catch(error => console.log(error))
                    }
                })
                .catch(errors => console.log(errors))
        }
    },

    login: function (req, res) {
        return res.render('login');
    },

    signIn: function (req, res) {

        console.log(req.body)

        //validar que el form traiga datos de email y contrasena (lo mismo que hicimos en el registro)
        //una vez que tenemos findOne preguntamos si chequeamos la contra con compareSync(), si no coinciden mandamos mensaje de error, sino registramos.
        let error = {}

        User.findOne({
            where: [{ email: req.body.email }]
        })
            .then(function (user) {

                if (user == null) {
                    error.message = 'El email no pertenece a ningun usuario';
                    res.locals.error = error;
                    return res.render('login');
                }

                let check = bcrypt.compareSync(req.body.password, user.password)
                if (check == false) {
                    error.message = 'Contraseña incorrecta';
                    res.locals.error = error;
                    return res.render('login');
                }

                req.session.user = user;

                if(req.body.recordarme != undefined){
                    res.cookie('userId',user.id,{maxAge: 1000*60*100}) 
                }
              
                return res.redirect('/')

            })

            .catch(errors => console.log(errors))
    },

    editarUsuario: function (req, res) {
        return res.render('profile-edit', { usuarios: usuarios.lista });
    },

    logout: function(req,res){
        req.session.destroy();

        if(req.cookies.userId !== undefined){
            res.clearCookie('userId')
        }

        return res.redirect('/');
    },

}
module.exports = usuarioController; 