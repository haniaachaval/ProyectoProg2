const celulares = require("../db/celulares");

const modeloController = {
    modelo: function(req,res){
        return res.render("modelo",{modelo:celulares.lista.modelo});
    }
}

module.exports = modeloController