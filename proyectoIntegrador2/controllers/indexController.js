let db = require("../db/celulares")
let usuario = require ("../db/usuario")

const indexController = {
    home : function(req,res){
        res.render ('index',{celus: db.lista })
    }
}

module.exports = indexController


