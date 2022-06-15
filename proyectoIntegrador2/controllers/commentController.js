const db = require("../database/models");
const Product = db.Product;
const Comment = db.Comment;

const commentController = {
    comentarios: function (req, res) {

        let nuevoComment = {
            product_id: req.params.id,
            user_id: req.session.user.id,
            comentario: req.body.comentario,
        }

        Comment.create(nuevoComment)

        .then(()=>{
            return res.redirect ('producto')
        })

        .catch((error) => {
            return res.send(error);
        })
    },
    comentario: function (req, res) {
        return res.render('product-add');
    }
}
module.exports = commentController