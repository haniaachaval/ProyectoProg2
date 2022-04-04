let express = require('express')
let router = express.Router();
let marcaController = require('../controllers/marcaController');

//ruta que muestra celulares segun la marca elegida 
router.get ('/', marcaController.marca)
module.exports = router;
 
