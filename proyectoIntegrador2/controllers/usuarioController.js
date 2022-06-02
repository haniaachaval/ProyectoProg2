//const usuarios = require("../db/usuario");
const db = require("../database/models");
const users = db.User
console.log(users)

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

    login: function(req,res){
        return res.render ('login'); 
    },

    editarUsuario: function(req,res){
        return res.render ('profile-edit',{ usuarios: usuarios.lista});
    },
}

module.exports = usuarioController; 