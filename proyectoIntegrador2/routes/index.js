const express = require('express');
const router = express.Router();
// lo de arriba permite modularizar el sistema de ruteo. 

const celulares = require('../db/celulares.js')

const controlador = require ('../controllers/indexController');

router.get('/', controlador.lista);


