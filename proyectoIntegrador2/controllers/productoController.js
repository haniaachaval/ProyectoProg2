const db = require("../database/models");
const Product = db.Product;

const productoController = {
    agregarProducto: function (req, res) {
        if(req.session.user != undefined ){
            return res.render('product-add', { usuarios: [] });
        } else {
            return res.redirect('/usuario/registro')
        }
        
    },

    detalleProducto: function (req, res) {
        console.log(req.params);
        var id = req.params.idProducto

        Product.findByPk(id,{
            include: [{association: 'User'},
                     {association: 'Comment',
                      include: [{association: 'User'}]}]
        })
        .then((producto) => {
          return res.send(producto)
                    return res.render('producto', {
                        producto: producto,
                    });
        })
        .catch((error) => {
            console.log(error)
            return res.send(error);
            
        })

    },
    showEdit: function (req, res) {
        return res.render('product-add');
    },
    edit:function (req, res) {
        return res.render('product-add');
    },
    nuevoProducto: function (req, res) {
        let errores = { message: "" }
        if (req.body.producto == '') {
            errores.message = 'Completar el campo nombre';
        }
        if (req.body.marca == '') {
            errores.message = errores.message + 'Completar el campo marca';

        }
        if (req.body.modelo == '') {
            errores.message = errores.message + 'Completar el campo modelo';

        }

        if (req.body.estado == '') {
            errores.message = errores.message + 'Completar el campo estado';
        }

        if (req.body.color == '') {
            errores.message = errores.message + 'Completar el campo color';

        }

        if (req.body.descripcion == '') {
            errores.message = errores.message + 'Completar la descripcion del producto';
        }

        if (req.file == undefined) {
            errores.message = errores.message + 'Agregar imagen';

        }


        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('product-add');
        }


            let producto = {
                marca: req.body.marca,
                modelo:req.body.modelo,
                estado:req.body.estado,
                color:req.body.color,
                image: req.file.filename,
                descripcion: req.body.descripcion,
                user_id: req.session.user.id 
            }
            Product.create (producto)

            .then(function (producto) {
                return res.redirect('/producto')
            })
            .catch(error => console.log(error))   
}

}

module.exports = productoController