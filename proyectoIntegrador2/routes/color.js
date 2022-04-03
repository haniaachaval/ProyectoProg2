let express = require ('express')
let Router = express.Router();
 
router.get ("/color/:idColor", function(req,res){
    res.send('Elegiste los celulares de color' + req.params.idColor)
});
 
router.get ("/color/:idColor/Comentarios/:idComentarios?", function(req,res){
    if(req.params.idComentarios == undefined){
        res.send('Bienvenidos a los comentarios del color' + req.params.idMarca);
    } else{
        res.send('Bienvenidos a los comentarios del color' + req.params.idColor + ", estas enfocado en el comentario numero" + req.params.idComentarios);
    }
});
 
module.exports = router;
