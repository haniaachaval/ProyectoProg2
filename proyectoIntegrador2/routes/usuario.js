const express = require('express');
const router = express.Router();

const usuarioController = require ('../controllers/usuarioController');

router.get('/', usuarioController.usuario);
router.get('/registro', usuarioController.registro);
router.get('/login', usuarioController.login);
router.get('/editar', usuarioController.editarUsuario);

module.exports = router;

