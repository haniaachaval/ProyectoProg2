const celulares = require("../db/celulares");
const comentario = require("../db/comentario");
const usuarios = require("../db/usuario");

const productoController = {
    agregarProducto : function(req,res){
        res.render ('product-add', {usuarios: usuarios.lista});
},
    detalleProducto : function(req,res){
        res.render ('producto', { celulares: celulares.lista, logueado: false,  comentario: comentario.lista });
}
}

module.exports = productoController