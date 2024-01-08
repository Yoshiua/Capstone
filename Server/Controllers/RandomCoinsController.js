require('dotenv').config({path: '../.env'});

const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
});

const Movie = require('../../Models/MovieModel')(sequelize);
const RequestedList = require('../../Models/RequstedMovieModel')(sequelize);

module.exports = {
    getRandomMovie: async (req, res) => {
        try {
            const movies = await Movie.findAll();
            if (movies.length >0) {
                const randomIndex = Math.floor(Math.random() * movies.length);
                res.status(200).send(movies[randomIndex]);
            }
            else {
                res.status(404).send({message: 'No movies found'});
            }
        }
        catch (err) {
            console.log('Error getting movies', err);
            res.sendStatus(500);
        }
    },

    getRandomRequestedMovie: async (req, res) => {
        try {
            const requestedMovies = await RequestedList.findAll();
            if (requestedMovies.length > 0) {
                const randomIndex = Math.floor(Math.random() * requestedMovies.length);
                res.status(200).send(requestedMovies[randomIndex]);
            } 
            else {
                res.status(404).send({ message: 'No requested movies found' });
            }
        } 
        catch (err) {
            console.log('Error getting random requested movie', err);
            res.sendStatus(500);
        }
    },

}