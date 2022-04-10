const usuarios = require("../db/usuario");

let usuarioController ={
    usuario: function(req,res){
        return res.render ('profile',{ usuarios: usuarios.lista});
    },

    registro:  function(req,res){
            return res.render ('register');
    },

    login: function(req,res){
        return res.render ('login');},

    editarUsuario: function(req,res){
            return res.render ('profile-edit',{ usuarios: usuarios.lista});
        },

    
}


module.exports = usuarioController; 