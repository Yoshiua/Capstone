require('dotenv').config({path: '../.env'});

const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
});

const Movie = require('../../Models/MovieModel')(sequelize);
//, Sequelize.DataTypes);


module.exports = {
    getUnsortedMovies: async (req, res) => {
        try {
            const unsortedMovies = await Movie.findAll({
                where: {
                    sort_status: 'unSorted',
                },
            });
        res.status(200).send(unsortedMovies);
        }
        catch (err) {
            console.log('Error getting unsorted movies', err);
            res.sendStatus(500);
        }
    },

    markAsSeen: async (req, res) => {
      const { movie_id } = req.params;

      try {
          const displayedUnsorted= await Movie.findOne({
              where: {
                  movie_id: movie_id,
              },
              attributes: ['movie_id'], 
          });

          if (!displayedUnsorted) {
              return res.status(404).send({ error: 'Movie not found' });
          }

          await Movie.update({
              sort_status: 'seen',
          }, 
          {
            where: {
             movie_id: displayedUnsorted.movie_id,
              },
          });
        
          res.status(200).send({ success: true });
          } 
          catch (err) {
            console.log('Error marking as seen', err);
            res.sendStatus(500);
          }
      },
    
      markAsUnseen: async (req, res) => {
        const { movie_id } = req.params;
  
        try {
            const displayedUnsorted= await Movie.findOne({
                where: {
                    movie_id: movie_id,
                },
                attributes: ['movie_id'], 
            });
  
            if (!displayedUnsorted) {
                return res.status(404).send({ error: 'Movie not found' });
            }
  
            await Movie.update({
                sort_status: 'unSeen',
            }, 
            {
              where: {
               movie_id: displayedUnsorted.movie_id,
                },
            });
          
            res.status(200).send({ success: true });
            } 
            catch (err) {
              console.log('Error marking as unSeen', err);
              res.sendStatus(500);
            }
      }
}

   
   
    // TODO: change genre select to be dropdown