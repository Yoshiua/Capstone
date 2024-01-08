require('dotenv').config({path: '../../.env'});

const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
});

const RequestedList = require('../../Models/RequstedMovieModel')(sequelize);


module.exports = {

    addRequestedMovie: async (req, res) => {
        console.log(req.body)
        const { movie_id, movie_title } = req.body;
        try {
            const newRequest = await RequestedList.create({ movie_id, movie_title });
            res.status(201).send(newRequest);
        }
        catch (err) {
            console.log('Error Requesting movie', err);
            res.sendStatus(500);
        }
    },

    getRequestedMovies: async (req, res) => {
        try {
            const requestedMovies = await RequestedList.findAll();
            res.status(200).send(requestedMovies);
        }
        catch (err) {
            console.log('Error getting requested movies', err);
            res.sendStatus(500);
        }
    },

}