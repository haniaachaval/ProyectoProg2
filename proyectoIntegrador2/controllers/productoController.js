const db = require("../database/models");
const Product = db.Product;
const Comment = db.Comment;



const productoController = {
    agregarProducto: function (req, res) {
        return res.render('product-add', { usuarios: [] });
    },
    detalleProducto: function (req, res) {
        console.log(req.params);
        var id = req.params.idProducto
        console.log(id)

        Product.findByPk(id,{
            include: [{association: 'User'}]
        })
        .then((producto) => {
            console.log(producto)
            return res.render('producto',{
                productos : producto,
                comentarios: [],
            });
        })
    .catch((error) => {
        console.log(error)
        return res.send(error);
    })
    },
    comentarios: function (req, res) {

        let nuevoComment = {
            product_id: req.params.id,
            user_id: req.session.user.id,
            comments: req.body.comments,
           
        }

        Comment.create(nuevoComment)
        .then(()=>{
            return res.redirect ('producto')
        })

        .catch((error) => {
            return res.send(error);
        })
    },

    nuevoProducto: function (req, res) {
        let errores = { message: "" }
        if (req.body.producto == '') {
            errores.message = 'Completar el campo nombre.';
        }
        if (req.body.marca == '') {
            errores.message = errores.message + 'Completar el campo marca.';

        }
        if (req.body.modelo == '') {
            errores.message = errores.message + 'Completar el campo modelo.';

        }

        if (req.body.estado == '') {
            errores.message = errores.message + 'Completar el campo estado.';
        }

        if (req.body.color == '') {
            errores.message = errores.message + 'Completar el campo color.';

        }

        if (req.body.descripcion == '') {
            errores.message = errores.message + 'Completar la descripcion del producto.';
        }

        if (req.file == undefined) {
            errores.message = errores.message + 'Agregar imagen.';

        }


        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('product-add');
        }

        Product.create (
            {
                marca: req.body.marca,
                modelo:req.body.modelo,
                estado:req.body.estado,
                color:req.body.color,
                image: req.file.filename,
                descripcion: req.body.descripcion,
                user_id: req.session.user.id 
            })

            .then(function (productoGuardado) {
                return res.redirect('/producto')
            })
            .catch(error => console.log(error))



    
    
}
}

module.exports = productoController