
let usuarioController ={
    usuario: function(req,res){
        return res.render ('profile');
    },

    registro: 
        function(req,res){
            return res.render ('register');
    },

    login: function(req,res){
        return res.render ('login');},
}


module.exports = usuarioController; 