let db = require("../db/celulares")

const indexController = {
    home : function(req,res){
        res.render ('index')
    }, 
    detalleProducto : function(req,res){
        res.render ('product', { celulares: lista });
        }
}
module.exports = indexController

