const express = require('express');
const router = express.Router();

const usuarioController = require ('../controllers/usuarioController');

router.get('/', usuarioController.usuario);
router.get('/registro', usuarioController.registro);
router.post('/store', usuarioController.store)
router.get('/login', usuarioController.login);
router.post('/login', usuarioController.signIn);
router.get('/editar', usuarioController.editarUsuario);

module.exports = router;

