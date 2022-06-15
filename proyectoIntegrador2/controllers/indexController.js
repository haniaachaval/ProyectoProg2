const db = require("../database/models")
const celular = require("../db/celulares")
const op = db.Sequelize.Op;

const indexController = {
    home : function(req,res){
        db.Product.findAll({
            order: [[ "createdAt" , "DESC"]]
        })
        .then((result) => {
            return res.render('index', {celus : result})
        }).catch((err) => {
            
        });
    },
    resultados : function(req, res){
        let search = req.query.search
        db.Product.findAll({
            where : [{name: {[op.like]: "%" + search + "%"}}]
        })
        .then((data) => {
            return res.render ("search-results", {
                product: data,
            })
            .catch((error) => {
                return res.send(error);
            })
        })
    },
    resultados: function(req,res){
        return res.render('search-results')
    },
}

module.exports = indexController


