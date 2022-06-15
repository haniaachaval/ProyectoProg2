const express = require('express'); //nos va a permitir modularizar el sistema de ruteo
const router = express.Router();

const comentController = require ('../controllers/commentController');


//comentarios
router.post('/comentar/:id', comentController.comentarios);
router.get('/', comentController.comentario);

module.exports = router;
