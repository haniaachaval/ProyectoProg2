module.exports = function (sequelize, dataTypes){

    let alias = 'Comment';
    
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comments:{
            type:dataTypes.STRING
        },
        product_id:{
            type:dataTypes.INTEGER
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
        tableName: 'Comment', 
        timestamps: true, 
        underscored: true, 
    }
    
    const Comment = sequelize.define(alias, cols, config);
    
    return Comment;
    }