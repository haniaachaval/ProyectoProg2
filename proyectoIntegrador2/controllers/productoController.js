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
        var id = req.params.id

        Product.findByPk(id,{
            include: [{association: 'User'},
                    {association: 'Comment',
                    order: [[ "createdAt" , "DESC"]],
                    include: [{association: 'User'}]}]
        })
        .then((producto) => {
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
        Product.findByPk(req.params.id)
        .then(product=>{
            return res.render('product-edit', {producto: product});
        })
        
    },
    edit: function (req, res) {
        let errores = { message: "" }
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
        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('product-edit');
        }
        else {
            let producto =  {
            marca: req.body.marca,
            modelo:req.body.modelo,
            estado:req.body.estado,
            color:req.body.color,
            //imagen: req.file.filename,
            descripcion: req.body.descripcion,
            user_id: req.session.user.id 
        }
        Product.update (producto, {where: {id: req.params.id}})
        .then(function (producto) {
        return res.redirect('/producto/' + req.params.id)
    })
    .catch(error => console.log(error))   
}
},
    nuevoProducto: function (req, res) {
        let errores = { message: '' }
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
                return res.redirect(`/producto/${producto.id}`)
            })
            .catch(error => console.log(error))   
},
    borrar: function(req, res){
        Product.destroy({ where: {id: req.params.id}})
        .then(response =>{
            return res.redirect('/')
        })
        .catch(error => console.log(error))  
    }

}

module.exports = productoController