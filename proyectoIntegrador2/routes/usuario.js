const express = require('express');
const router = express.Router();

const usuarioController = require ('../controllers/usuarioController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.' + file.mimetype.split('/').pop())
    }
  })
  
  const upload = multer({ storage });
  

router.get('/', usuarioController.usuario);
router.get('/registro', usuarioController.registro);
router.post('/store', upload.single("foto") , usuarioController.store)
router.get('/login', usuarioController.login);
router.post('/login', usuarioController.signIn);
router.get('/editar', usuarioController.editarUsuario);
router.get('/logout', usuarioController.logout);


module.exports = router;

