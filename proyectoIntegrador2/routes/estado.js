const express = require('express');
const router = express.Router();

const controlador = require ('../controllers/estadoController');

router.get('/', controlador.estado);

module.exports = router;

