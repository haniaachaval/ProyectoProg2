const express = require('express');
const router = express.Router();

const libros = require('../db/celulares')

// cuando tengamos controladores
const controlador = require('../controllers/autoController')
router.get('/', controlador.libros)


