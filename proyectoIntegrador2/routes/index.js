const express = require('express');
const router = express.Router();


const controlador = require ('../controllers/indexController');

router.get('/', controlador.home);
router.get('/resultado', controlador.resultados);


module.exports = router;

