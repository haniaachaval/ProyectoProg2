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
        cover_url:{
            type:dataTypes.STRING
        },
        user_id:{
            type:dataTypes.INTEGER
        },
        createdAt:{
            type:dataTypes.DATE
        },
        updatedAt:{
            type:dataTypes.DATE
        },
        deletedAt:{
            type:dataTypes.DATE
        },

    }
    
    
    let config = {
        tableName: 'products', 
        timestamps: true, 
        underscored: true, 
    }
    
    const Product = sequelize.define(alias, cols, config);
    Product.belongsTo(models.User, {
        as:'User',
        foreignKey: 'user_id'
    })
    Product.hasMany(models.Comment, {
        as:'Comment',
        foreignKey: 'product_id'
    })

   
    return Product;
    }