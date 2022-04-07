let db = require("../db/celulares")

const indexController = {
    home : function(req,res){
        res.render ('index',{logueado:false})
    }, 

    homeLogueado: function(req,res){
        res.render ('index',{logueado:true})
    }, 
}

module.exports = indexController

