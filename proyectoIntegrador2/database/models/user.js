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
    underscored: true, //le avisa a sequelize q esta todo en minuscula no hay camelcase
}

const User = sequelize.define (alias, cols, config);
//Relaciones entre tablas

/*User.associate = function(models){
    User.hasMany(models.products, {
        as:'usuario_productos',
        foreignKey: 'user_id'
    })
    User.hasMany(models.comments, {
        as:'comments_users',
        foreignKey: 'user_id'
    })}
    */
return User;
}