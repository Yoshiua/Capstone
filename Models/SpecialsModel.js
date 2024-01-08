const {Model, DataTypes} = require('sequelize');


module.exports=(sequelize)=>{
    class SpecialsList extends Model {}
    SpecialsList.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movieId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Movies', 
                key: 'movie_id'
            }
        },
        category: {
            type: DataTypes.ENUM('community', 'halloween', 'christmas'),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'SpecialsList',
        tableName: 'SpecialMovies',
    });
    return SpecialsList;
}