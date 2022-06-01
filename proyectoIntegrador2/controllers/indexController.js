const db = require("../db/celulares")

const indexController = {
    home : function(req,res){
        return res.render ('index',{celus: db.lista })
    },
    resultados: function(req,res){
        return res.render('search-results')
    },
}

module.exports = indexController


