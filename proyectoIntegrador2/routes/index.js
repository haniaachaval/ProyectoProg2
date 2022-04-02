const express = require('express');
const router = express.Router();
// lo de arriba permite modularizar el sistema de ruteo. 

const celulares = require('../db/celulares.js')

// cuando tengamos controladores
const controlador = require('../controllers/autoController')
router.get('/', controlador.libros)


