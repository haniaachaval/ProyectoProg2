const express = require('express');
const router = express.Router();
// lo de arriba permite modularizar el sistema de ruteo. 

const controlador = require ('../controllers/indexController');

router.get('/', controlador.home);
router.get('/resultado', controlador.resultados);


module.exports = router;

