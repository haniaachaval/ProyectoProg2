const express = require('express'); //nos va a perrmitir modularizar el sistema de ruteo
const router = express.Router();
const modeloController = require("../controllers/modeloController")

//ruta que muestra los modelos
router.get ('/', modeloController.modelo );


//exportamos el contenido del router para hacerlo visible y poder requerirlo en los otros archivos
module.exports = router 