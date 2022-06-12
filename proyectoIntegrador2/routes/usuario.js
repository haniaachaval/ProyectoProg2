const express = require('express');
const router = express.Router();

const usuarioController = require ('../controllers/usuarioController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage });
  

router.get('/', usuarioController.usuario);
router.get('/registro', usuarioController.registro);
router.post('/store', upload.single("foto") , usuarioController.store)
router.get('/login', usuarioController.login);
router.post('/login', usuarioController.signIn);
router.get('/editar', usuarioController.editarUsuario);
router.post('/logout', usuarioController.logout);


module.exports = router;

