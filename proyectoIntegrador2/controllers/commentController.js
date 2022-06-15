const db = require("../database/models");
const Comment = db.Comment;

const commentController = {
    comentarios: function (req, res) {
        if(req.session.user != undefined ){
            let nuevoComment = {
                product_id: req.params.id,
                user_id: req.session.user.id,
                comments: req.body.comentario,
            }
    
            Comment.create(nuevoComment)
    
            .then(()=>{
                return res.redirect ('/producto/'+ req.params.id)
            })
    
            .catch((error) => {
                return res.send(error);
            })
        } else {
            return res.redirect('/usuario/login')
        }
        
    }
}
module.exports = commentController