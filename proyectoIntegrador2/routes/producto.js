const express = require('express'); //nos va a permitir modularizar el sistema de ruteo
const router = express.Router();

const productoController = require("../controllers/productoController")
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

//ruta que muestra los modelos

router.get ('/add', productoController.agregarProducto );
router.post ('/add', upload.single("imagen"), productoController.nuevoProducto);

router.get ('/', productoController.detalleProducto );
router.get ('/:idProducto', productoController.detalleProducto );

//editar producto
router.get ('/editar/:id', productoController.showEdit);
router.post('/editar/:id', productoController.edit);

//eliminar producto
router.post('/borrar/:id', productoController.borrar);

//exportamos el contenido del router para hacerlo visible y poder requerirlo en los otros archivos
module.exports = router 