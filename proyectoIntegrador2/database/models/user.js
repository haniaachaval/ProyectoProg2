module.exports = function (sequelize, dataTypes) {

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
        password: {
            type: dataTypes.STRING
        },
        birth_date: {
            type: dataTypes.DATE
        },

        image: {
            type: dataTypes.STRING

        }
    }

    //configuraciones adicionales
    let config = {
        tableName: 'users', //nombre de la tabla db
        timestamps: true, //le dice al modelo si en la tabla esta createdAt, updatedAt
        underscored: false, //le avisa a sequelize q esta todo en minuscula no hay camelcase
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: 'Product',
            foreignKey: 'user_id'
        })
        User.hasMany(models.Comment, {
            as: 'Comment',
            foreignKey: 'user_id'
        })
        User.belongsToMany(models.User, {
            as: 'Followers',
            through: 'followers',
            otherKey: 'seguidor_id',
            foreignKey: 'seguido_id',
            timestamps: false,
        })
    }
    return User;
}