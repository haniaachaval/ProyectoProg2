const db = require("../database/models")
const op = db.Sequelize.Op;

const indexController = {
    home : function(req,res){
        db.Product.findAll({
            order: [[ "createdAt" , "DESC"]],
            include : [{association: "User"}]
        })
        .then((result) => {
            return res.render('index', {celus : result})
        }).catch((err) => {
            
        });
    },
    resultados : function(req, res){
        let search = req.query.search;
        db.Product.findAll({
            where : [{name: {[op.like]: "%" + search + "%"}},
            {descripcion: {[op.like]: "%" + search + "%"}}]
        })
        .then((data) => {
            if (search != data) {
                return res.render('search-results', { product: data})
            } else {
                res.send('no se encontraron resultados')
            }})
            .catch((error) => {
                return res.send(error);
            })
        },
    resultados: function(req,res){
        return res.render('search-results')
    },
}

module.exports = indexController


