let db = require("../db/celulares")
let usuario = require ("../db/usuario")

const indexController = {
    home : function(req,res){
        res.render ('index',{logueado:false, celus: db.lista})
    }, 

    homeLogueado: function(req,res){
        res.render ('index',{logueado:true,celus: db.lista, usuarios:usuario.lista})
    }, 
}

module.exports = indexController


