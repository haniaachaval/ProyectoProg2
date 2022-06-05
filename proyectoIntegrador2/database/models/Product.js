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
    }
    
    
    let config = {
        tableName: 'products', 
        timestamps: false, //Si la tabla no tiene los campos createdAt y updatedAt
        underscored: true, //Si la tabla tiene columnas con nombres usando guiones bajos.
    }
    
    const Product = sequelize.define(alias, cols, config);
    
    return Product;
    }