const db = require("../database/models");
const users = db.Producto

const productoController = {
    agregarProducto : function(req,res){
        return res.render ('product-add', {usuarios: usuarios.lista});
    },
    detalleProducto : function(req,res){
        return res.render ('producto', { celulares: celulares.lista, comentario: comentario.lista });
    }
}

module.exports = productoController