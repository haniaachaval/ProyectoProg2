const express = require('express'); //nos va a permitir modularizar el sistema de ruteo
const router = express.Router();

const comentController = require ('../controllers/commentController');


//comentarios
router.post('/:idComentar', comentController.comentarios);
router.get('/', comentController.comentario);
