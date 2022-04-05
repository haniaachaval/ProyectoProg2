const indexController = {
    home : function(req,res){
        res.render ('index')
    }, 
    detalleProducto : function(req,res){
        res.render ('product');
        }
}
module.exports = indexController