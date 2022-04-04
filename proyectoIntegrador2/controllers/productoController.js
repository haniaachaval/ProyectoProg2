const celulares = require("../db/celulares");

const productoController = {
    modelo: function(req,res){
        return res.render("producto",{modelo:celulares.lista.modelo});
    }
}

module.exports = productoController