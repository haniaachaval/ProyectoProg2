let db = require("../db/celulares")
let usuarios = require ("../db/usuario")

const indexController = {
    home : function(req,res){
        res.render ('index',{logueado:false, celus: db.lista})
    }, 

    homeLogueado: function(req,res){
        res.render ('index',{logueado:true,celus: db.lista, usuarios:usuarios.lista})
    }, 
}

module.exports = indexController


