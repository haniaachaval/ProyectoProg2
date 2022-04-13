let db = require("../db/celulares")
const usuarios = require("../db/usuario")

const indexController = {
    home : function(req,res){
        res.render ('index',{celus: db.lista })
    },
   
    resultados: function(req,res){
        res.render('search-results')
    },
}

module.exports = indexController


