require('dotenv').config({ path: '../.env' });
const express = require("express");
// console.log(process.env.CONNECTION_STRING);
const cors = require("cors");
const axios = require("axios");
const { SERVER_PORT } = process.env;


const app = express();

app.use(cors());

app.use(express.json());


const movieController = require("./Controllers/moviesController");
const sortingController = require("./Controllers/sortMachineController");
const randomCoinsController = require("./Controllers/RandomCoinsController");
const requestedMoviesController = require('./Controllers/requestedMovieController');
const specialsController = require('./Controllers/SpecialsController');

app.get("/api/movies", movieController.getMovies);
app.post("/api/movies", movieController.createMovie);
app.delete("/api/movies/:movie_id", movieController.deleteMovie);

app.get("/api/unsortedMovies", sortingController.getUnsortedMovies);
app.patch('/api/markAsSeen/:movie_id', sortingController.markAsSeen);
app.patch('/api/markAsUnseen/:movie_id', sortingController.markAsUnseen);

app.get('/api/randomMovie', randomCoinsController.getRandomMovie);
app.get('/api/randomRequestedMovie', randomCoinsController.getRandomRequestedMovie);

app.post('/api/requestedMovies', requestedMoviesController.addRequestedMovie);
app.get('/api/requestedMovies', requestedMoviesController.getRequestedMovies);

app.post('/api/specials', specialsController.addSpecialMovie);


require("./Controllers/db");

app.listen(SERVER_PORT, () => console.log("Server is running on port", SERVER_PORT));