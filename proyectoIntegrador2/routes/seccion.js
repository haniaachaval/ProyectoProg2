const express = require('express');
const router = express.Router();

const libros = require('../db/libros')

// cuando tengamos controladores
const controlador = require('../controllers/autoController')
router.get('/', controlador.libros)


