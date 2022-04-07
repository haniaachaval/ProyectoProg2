const express = require('express');
const router = express.Router();
// lo de arriba permite modularizar el sistema de ruteo. 

const controlador = require ('../controllers/indexController');

router.get('/', controlador.home);
router.get('/logueado', controlador.homeLogueado);
router.get('/productos', controlador.home)
router.get('/productos/:idProductos', controlador.detalleProducto)


module.exports = router;

