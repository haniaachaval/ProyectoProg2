
module.exports= function (Sequelize,dataTypes){
    let alias= "Movie";
    let cols= {
        id: {
            autoIncrement: true, 
            primaryKey: true,
        },

        title: {
            type: dataTypes.string
        },
        rating:{}, 
        awards: {
            type: dataTypes.integer
        },
    }
}