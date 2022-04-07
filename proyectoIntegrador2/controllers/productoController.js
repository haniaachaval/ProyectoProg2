const celulares = require("../db/celulares");
// const productoController = {
//    modelo: function(req,res){
//       return res.render("producto",{modelo:celulares.lista.modelo});
//    }
//}


const productoController = {
    home : function(req,res){
        res.render ('producto',{logueado:false})
    }, 

    homeLogueado: function(req,res){
        res.render ('producto',{logueado:true})
    }, 

    detalleProducto : function(req,res){
        res.render ('producto', { celulares: celulares.lista });
        }
    
}

module.exports = productoController