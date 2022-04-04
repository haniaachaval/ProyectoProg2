let express = require ('express')
let router = express.Router();
 
router.get ('/marca/:idMarca', function(req,res){
    res.send('Elegiste la marca' + req.params.idMarca)
});
 
router.get ('/marca/:idMarca/Comentarios/:idComentarios?', function(req,res){
    if(req.params.idComentarios == undefined){
        res.send('Bienvenidos a los comentarios de la marca' + req.params.idMarca);
    } else{
        res.send('Bienvenidos a los comentarios de la marca' + req.params.idMarca + ", estas enfocado en el comentario numero" + req.params.idComentarios);
    }
});
 
module.exports = router;
 
