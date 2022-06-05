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
        let user= {
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        users.create(user)
            .then( function(userGuardado){ 
                return res.redirect('/')
            })
            .catch( error => console.log(error))
    },

    login: function(req,res){
        return res.render ('login'); 
    },

    signIn: function(req,res){
       //verificar que el mail exista y la contraseña encriptada  
    },

    editarUsuario: function(req,res){
        return res.render ('profile-edit',{ usuarios: usuarios.lista});
    },
}

module.exports = usuarioController; 