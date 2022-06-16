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
        console.log("holaaaa")
        db.Product.findAll({
            where : {
                [op.or]:[
                    {marca: {[op.like]: "%" + search + "%"}},
                    {modelo: {[op.like]: "%" + search + "%"}},
                    {descripcion: {[op.like]: "%" + search + "%"}}
                ]
            },
            include: [{association: 'User'}]
        })
        .then((data) => {
                return res.render('search-results', { products: data})
            })
            .catch((error) => {
                return res.send(error);
            })
        },
}

module.exports = indexController


