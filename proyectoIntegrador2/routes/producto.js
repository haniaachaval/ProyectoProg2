const express = require('express'); //nos va a perrmitir modularizar el sistema de ruteo
const router = express.Router();

const productoController = require("../controllers/productoController")

//ruta que muestra los modelos
router.get ('/', productoController.modelo );


//exportamos el contenido del router para hacerlo visible y poder requerirlo en los otros archivos
module.exports = router 