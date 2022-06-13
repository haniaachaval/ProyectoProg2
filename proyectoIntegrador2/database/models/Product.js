module.exports = function (sequelize, dataTypes){

    let alias = 'Product';
    
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        marca:{
            type:dataTypes.STRING
        },
        modelo:{
            type:dataTypes.STRING
        },
        estado:{
            type:dataTypes.STRING
        },
        color:{
            type:dataTypes.STRING
        },
        user_id:{
            type:dataTypes.INTEGER
        },
        /*created_at:{
            type:dataTypes.DATE
        },
        updated_at:{
            type:dataTypes.DATE
        },
        deleted_at:{
            type:dataTypes.DATE
        },*/

        image: {
            type:dataTypes.STRING
        },

        descripcion: {
            type:dataTypes.STRING
        }

    }
    
    
    let config = {
        tableName: 'products', 
        timestamps: false, 
        underscored: true, 
    }
    
    const Product = sequelize.define(alias, cols, config);

    //relaciones
    Product.associate = function(models){
        
    Product.belongsTo(models.User, {
        as:'User',
        foreignKey: 'user_id'
    })
    Product.hasMany(models.Comment, {
        as:'Comment',
        foreignKey: 'product_id'
    })
    }
    return Product;
    }