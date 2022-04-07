let db = require("../db/celulares")

const indexController = {
    home : function(req,res){
        res.render ('index',{logueado:false, celus: db.lista })
    }, 

    homeLogueado: function(req,res){
        res.render ('index',{logueado:true})
    }, 
}

module.exports = indexController


