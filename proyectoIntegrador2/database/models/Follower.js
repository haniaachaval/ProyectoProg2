module.exports = function (sequelize, dataTypes){

    let alias = 'Follower';
    
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
       
        seguidor_id:{
            type:dataTypes.INTEGER
        },
        seguido_id:{
            type:dataTypes.INTEGER
        },

    }
    
    
    let config = {
        tableName: 'Followers', 
        timestamps: false, 
        underscored: true, 
    }
    
    const Follower = sequelize.define(alias, cols, config);

    return Follower; 

}