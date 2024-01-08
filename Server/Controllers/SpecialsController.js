require('dotenv').config({path: '../../.env'});

const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
});

const SpecialsList = require('../../Models/SpecialsModel')(sequelize);

module.exports = {
    addSpecialMovie: async (req, res) => {
        console.log("Received request body:", req.body);
        const { movieId, category } = req.body;

        try {
            const newSpecial = await SpecialsList.create({ movieId, category });
            res.status(201).send(newSpecial);
        } catch (err) {
            console.log('Error adding to special list', err);
            res.sendStatus(500);
        }
    },

    // TODO: add way to remove from the list
}