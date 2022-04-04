const express = require('express'); //nos va a perrmitir modularizar el sistema de ruteo
const router = express.Router();

//ruta que muestra los modelos
router.get ("/modelos/:idModelo?", function(req,res){
    return res.send("todos los modelos")
});


//exportamos el contenido del router para hacerlo visible y poder requerirlo en los otros archivos
module.exports = router 