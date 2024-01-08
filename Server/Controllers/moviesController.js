require('dotenv').config({path: '../.env'});

const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
});

const Movie = require('../../Models/MovieModel')(sequelize);




module.exports = {
    
    getMovies: async (req, res) => {
        try {
            const movies = await Movie.findAll();
            res.status(201).send(movies);
            // console.log(movies)
        }
        catch (err) {
            console.log('Error getting movies', err);
            res.sendStatus(500);
        }

    },

    createMovie: async (req, res) => {
        try {
            const newMovie = await Movie.create(req.body);
            res.status(201).send(newMovie);
        }
        catch (err) {
            console.log('Error creating movie', err);
            res.sendStatus(500);
        }

    },

    deleteMovie: async (req, res) => {
        const { movie_id } = req.params;

        try {
            const movieToDelete = await Movie.findOne({
                where: {
                    movie_id: movie_id,
                },
                attributes: ['movie_id'], 
            });

            if (!movieToDelete) {
                return res.status(404).send({ error: 'Movie not found' });
            }

            await Movie.destroy({
                where: {
                    movie_id: movieToDelete.movie_id,
                },
            });
            
            res.status(200).send({ success: true });
        } 
        catch (err) {
            console.log('Error deleting movie', err);
            res.sendStatus(500);
        }
    },
}