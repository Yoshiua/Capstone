const {Model, DataTypes} = require('sequelize');


module.exports=(sequelize)=>{
    class RequestedList extends Model {}
    RequestedList.init({
        request_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movie_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique : true,
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Movies',
                key: 'movie_id'
            }
        }

    },
    {
        sequelize,
        modelName: 'RequestedList',
        timestamps: true,
        tableName: 'RequestedMovies',
    },)
    return RequestedList
}