//const usuarios = require("../db/usuario");
const db = require("../database/models");
const users = db.User
const bcrypt= require('bcryptjs');

const usuarioController = {
    usuario: function(req,res){
        users.findAll()
            .then(function(usuarios){
                res.send(usuarios)
                //return res.render ('index', {title: 'Express'} );
            });
        },
    registro:  function(req,res){
        return res.render ('register');
    },

    store:  function(req,res){
        //detectar errores, situaciones irregulares
        let errores = {}

        //chequear que el email no este vacio
        if(req.body.email == ''){
            errores.message ='Completar el campo email';
            res.locals.errores = errores;
            return res.render('register');
        } else if(req.body.password == ''){
            errores.message ='Completar el campo password';
            res.locals.errores = errores;
            return res.render('register');
        } else{
            //chequear que elemail no exista en la base
            users.findOne({
                where: [{email: req.body.email}]
            })
            .then(function(user){
                if(user !== null){
                errores.message ='El email ya existe, elija uno nuevo';
                res.locals.errores = errores;
                return res.render('register');
                } else {
                        let user= {
                            email:req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                        }
                
                        users.create(user)
                            .then( function(userGuardado){ 
                                return res.redirect('/')
                            })
                            .catch( error => console.log(error))
                    }   
            })
            .catch(errors => console.log(errors))
        }
    },
        
    login: function(req,res){
        return res.render ('login'); 
    },

    signIn: function(req,res){
    //validar que el form traiga datos de email y contrasena (lo mismo que hicimos en el registro)
    //una vez que tenemos findOne preguntamos si chequeamos la contra con compareSync(), si no coinciden mandamos mensaje de error, sino registramos.
    },

    editarUsuario: function(req,res){
        return res.render ('profile-edit',{ usuarios: usuarios.lista});
    },
}

module.exports = usuarioController; 