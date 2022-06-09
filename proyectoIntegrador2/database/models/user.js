module.exports = function (sequelize, dataTypes){
    
    //defino un alias
    let alias = "User";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        userName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        birth_date: {
            type: dataTypes.DATE
        }
    }

 //configuraciones adicionales
let config = {
    tableName: 'users', //nombre de la tabla db
    timestamps: true, //le dice al modelo si en la tabla esta createdAt, updatedAt
    underscored: false, //le avisa a sequelize q esta todo en minuscula no hay camelcase
}

const User = sequelize.define (alias, cols, config);

Product.belongsTo(models.User, {
    as:'User',
    foreignKey: 'user_id'
})
Product.hasMany(models.Comment, {
    as:'Comment',
    foreignKey: 'product_id'
})

return User;
}