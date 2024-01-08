const sortingContainer = document.querySelector('#sortingContainer');
const movieContainer = document.querySelector('#movieContainer');
const requestedContainer = document.querySelector('#requestedContainer');
const form = document.querySelector('#addMasterForm');
const markAsUnseenBtn = document.querySelector('#markAsUnseenBtn');
const markAsSeenBtn = document.querySelector('#markAsSeenBtn');
const randomMovieBtn = document.querySelector('#randomMovieBtn');
const randomRequestedBtn = document.querySelector('#randomRequestedBtn');


const baseURL = 'http://localhost:8000/api';

const unsortedMoviesCallback = ({data: unsortedMovies}) => displayUnsortedMovies(unsortedMovies);
const moviesCallback = ({data: movies}) => displayMovies(movies);
const errCallback = err => console.log(err);


const getAllMovies = () => axios
    .get(`${baseURL}/movies`)
    .then(moviesCallback)
    .then(getUnsortedMovies)
    .catch(errCallback);

const createMovie = body => axios
    .post(`${baseURL}/movies`, body)
    .then(moviesCallback)
    .catch(errCallback);

const deleteMovie = id => axios
    .delete(`${baseURL}/movies/${id}`)
    .then(() => {
        const deletedMovieCard = document.querySelector(`[data-movie-id="${id}"]`);
        if (deletedMovieCard) {
            deletedMovieCard.remove();
        }
        playDeleteAnimation();
        getAllMovies();
    })
    .catch(errCallback);

const getRequestedMovies = () => axios
    .get(`${baseURL}/requestedMovies`)
    .then(({ data: requestedMovies }) => displayRequestedMovies(requestedMovies))
    .catch(errCallback);
    
    const getUnsortedMovies = () => axios
    .get(`${baseURL}/unsortedMovies`)
    .then(unsortedMoviesCallback)
    .catch(errCallback);
    
    const markAsSeen = (movie_id) => axios
    .patch(`${baseURL}/markAsSeen/${movie_id}`)
    .then(() => getUnsortedMovies())
    .catch(errCallback);
    
    const markAsUnseen = (movieId) => axios
    .patch(`${baseURL}/markAsUnseen/${movieId}`)
    .then(() => getUnsortedMovies())
    .catch(errCallback);

    const handleRequestMovie = async (movie) => {
       try {
           await axios.post(`${baseURL}/requestedMovies`, { movie_id: movie.movie_id, movie_title: movie.movie_title});
           alert('Movie requested successfully!');
           getRequestedMovies(); 
       } 
       catch (err) {
           console.error('Error requesting movie:', err);
       }
   };

   async function handleSpecialRequest(movie, specialType) {
    console.log('Special Type:', specialType);
    const sectionIds = {
        'community': 'communitySection',
        'halloween': 'spookySection',
        'christmas': 'christmasSection'
    };
    const sectionId = sectionIds[specialType.toLowerCase()];
    const section = document.getElementById(sectionId);

    if (section) {
        const listItem = document.createElement('li');
        listItem.textContent = movie.movie_title;
        listItem.classList.add('special-list-item');
        section.appendChild(listItem);

        try {
            await axios.post(`${baseURL}/specials`, {
                movieId: movie.movie_id,
                category: specialType
            });
            console.log('Special request added successfully');
        } catch (err) {
            console.error('Error adding special request:', err);
        }
    }
}

    async function submitHandler(e) {
        e.preventDefault();
        
        const title = document.getElementById('titleGen').value;
        const genre = document.getElementById('genreGen').value;
        const cover = document.getElementById('coverGen').value;
        
        if (!title || !genre) {
            alert('Please fill in the "Title" and "Genre" fields');
            return;
        }
        
        
        const bodyObj = {
            movie_title: title,
            genre: genre,
            cover_img: cover
            
        };
        
        try {
            await createMovie(bodyObj);
            form.reset();
            await getAllMovies();
            await getUnsortedMovies();
        }
        catch (err) {
            console.error('Error adding movie:', err);
        }
    }
    
    function confirmDelete(movieID) {
        const confirmation = prompt('Type "DELETE" to confirm deletion:');
        if (confirmation === 'DELETE') {
            deleteMovie(movieID);
        } else {
            alert('Deletion canceled.');
        }
    }
    
    function createMovieCard(movie) {
        const movieContainer = document.getElementById('movieContainer');
        
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.dataset.movieId = movie.movie_id;
        
        const watchedStatus = document.createElement('div');
        watchedStatus.classList.add('watched-status');
        
        if (movie.sort_status === 'seen') {
            watchedStatus.textContent = 'Watched';
            watchedStatus.style.backgroundColor = 'rgba(144, 198, 149, 0.9)';
        } 
        else if (movie.sort_status === 'unSeen') {
            watchedStatus.textContent = `Hasn't Seen It`;
            watchedStatus.style.backgroundColor = 'rgba(249, 191, 59, 0.9)';
        }
        else {
            watchedStatus.textContent = 'Unsorted';
            watchedStatus.style.backgroundColor = 'rgba(250, 244, 211, 0.9)';
        }
        
        
        
        const movieDetails = document.createElement('div');
        movieDetails.classList.add('movie-details');
        
        const  textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        
        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.movie_title;
        
        const movieGenre = document.createElement('p');
        movieGenre.classList.add('movie-genre');
        movieGenre.textContent = movie.genre;
        
        textContainer.appendChild(movieTitle);
        textContainer.appendChild(movieGenre);
        
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('actions-container');
        
        const requestButton = document.createElement('button');
        requestButton.classList.add('request-button');
        requestButton.textContent = 'Request';
        requestButton.addEventListener('click', () => handleRequestMovie(movie));
        
        const specialsButton = document.createElement('button');
        specialsButton.classList.add('specials-button');
        specialsButton.textContent = 'Special Rqst';
        

        const specialsDropdown = document.createElement('select');
        specialsDropdown.classList.add('specials-dropdown');
        

        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Choose Special';
        defaultOption.value = '';
        specialsDropdown.appendChild(defaultOption);

        ['Community', 'Halloween', 'Christmas'].forEach(special => {
            const option = document.createElement('option');
            option.textContent = special;
            option.value = special.toLowerCase();
            specialsDropdown.appendChild(option);
        });

        specialsButton.addEventListener('click', function(event) {
            event.stopPropagation();
            const rect = event.target.getBoundingClientRect();
            specialsDropdown.style.left = `${rect.left + window.scrollX}px`; 
            specialsDropdown.style.top = `${rect.bottom + window.scrollY}px`; 
            specialsDropdown.style.display = 'block';
        });

        specialsDropdown.addEventListener('change', function() {
            handleSpecialRequest(movie, this.value);
            this.style.display = 'none';
            this.value = '';
        });

    
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-movie');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => confirmDelete(movie.movie_id));
        
        movieDetails.appendChild(textContainer);
        movieDetails.appendChild(actionsContainer);
        
        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');
        
        const movieCover = document.createElement('img');
        movieCover.classList.add('movie-cover');
        movieCover.src = movie.cover_img;
        
        document.body.appendChild(specialsButton);
        document.body.appendChild(specialsDropdown);

        actionsContainer.appendChild(requestButton);
        actionsContainer.appendChild(specialsButton);
        actionsContainer.appendChild(deleteButton);
        
        movieInfo.appendChild(movieCover);
        movieInfo.appendChild(movieDetails);
        
        movieCard.appendChild(movieInfo);
        movieCard.appendChild(watchedStatus);
        
        movieContainer.appendChild(movieCard);
}

function createUnsortedCard(movie) {
    const sortingContainer = document.getElementById('sortingContainer');
    
    const unsortedCard = document.createElement('div');
    unsortedCard.classList.add('unsorted-card');
    unsortedCard.dataset.movieId = movie.movie_id;
    
    const unsortedInfo = document.createElement('div');
    unsortedInfo.classList.add('unsorted-movie-info');
    
    const unsortedCover = document.createElement('img');
    unsortedCover.classList.add('unsorted-movie-cover');
    unsortedCover.src = movie.cover_img;
    
    const unsortedDetails = document.createElement('div');
    unsortedDetails.classList.add('unsorted-movie-details');
    
    const unsortedTitle = document.createElement('h2');
    unsortedTitle.classList.add('unsorted-movie-title');
    unsortedTitle.textContent = movie.movie_title;
    
    const unsortedGenre = document.createElement('p');
    unsortedGenre.classList.add('unsorted-movie-genre');
    unsortedGenre.textContent = movie.genre;
    
    unsortedDetails.appendChild(unsortedTitle);
    unsortedDetails.appendChild(unsortedGenre);
    
    unsortedInfo.appendChild(unsortedCover);
    unsortedInfo.appendChild(unsortedDetails);
    
    unsortedCard.appendChild(unsortedInfo);
    
    sortingContainer.appendChild(unsortedCard);
}

function createRequestedCard(movie, index) {
    const requestedItem = document.createElement('li');
    requestedItem.textContent = `${index + 1}. ${movie.movie_title}`;
    requestedItem.classList.add('requested-item'); 
    return requestedItem;
}


function displayMovies(movies, limit = 15) {
    movieContainer.innerHTML = '';
    const displayCount =Math.min(movies.length, 15);
    for (let i = 0; i < displayCount; i++) {
        createMovieCard(movies[i]);
    }
    if (movies.length > 15) {
        createShowAllButton(movies);
    }
}

function displayAllMovies(movies) {
    movieContainer.innerHTML = '';
    movies.forEach(movie => createMovieCard(movie));
}


function displayUnsortedMovies(unsortedMovies) {
    sortingContainer.innerHTML = '';
    
    if (unsortedMovies.length === 0) {
        sortingContainer.textContent = 'No unsorted movies available.';
        return;
    }
    
    const unsortedMovie = unsortedMovies.find(movies => movies.sort_status === 'unSorted');
    createUnsortedCard(unsortedMovie);
}

function displayRequestedMovies(movies) {
    requestedContainer.innerHTML = '';
    const displayCount = Math.min(movies.length, 10);
    for (let i = 0; i < displayCount; i++) {
        const requestedItem = createRequestedCard(movies[i], i);
        requestedContainer.appendChild(requestedItem);
    }

    if (movies.length > 10) {
        createShowAllRequestedButton(movies);
    }
}

function displayAllRequestedMovies(movies) {
    requestedContainer.innerHTML = ''; 
    movies.forEach((movie, index) => {
        const requestedItem = createRequestedCard(movie, index);
        requestedContainer.appendChild(requestedItem);
    });
}

function createShowAllButton(movies) {
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Show All Movies';
    showAllButton.classList.add('show-all-movies'); 
    showAllButton.addEventListener('click', () => displayAllMovies(movies));
    movieContainer.appendChild(showAllButton);
}

function createShowAllRequestedButton(movies) {
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Show All Requests';
    showAllButton.classList.add('show-all-requested'); 
    showAllButton.addEventListener('click', () => displayAllRequestedMovies(movies));
    requestedContainer.appendChild(showAllButton);
}

function playDeleteAnimation(){
    const video = document.getElementById("deleteAnimation");
    const overlay = document.getElementById("videoOverlay");
    
    overlay.style.display = "block";
    video.style.display = "block";
    video.play();
    
    video.onended = () => {
        video.style.display = "none";
        overlay.style.display = "none";
    }
    
}

getUnsortedMovies();

markAsUnseenBtn.addEventListener('click', async () => {
    const movieId = sortingContainer.firstChild.dataset.movieId;
    await markAsUnseen(movieId);
    getUnsortedMovies()
    getAllMovies();
});

markAsSeenBtn.addEventListener('click', async () => {
    const movieId = sortingContainer.firstChild.dataset.movieId;
    await markAsSeen(movieId);
    getUnsortedMovies()
    getAllMovies();
});

randomMovieBtn.addEventListener('click', async () => {
    try {
        const response = await axios.get(`${baseURL}/randomMovie`);
        const movie = response.data;
        alert(`${movie.movie_title}`);
    } catch (err) {
        console.error('Error fetching random movie:', err);
        alert('Failed to fetch a random movie.');
    }
});

randomRequestedBtn.addEventListener('click', async () => {
    try {
        const response = await axios.get(`${baseURL}/randomRequestedMovie`);
        const movie = response.data;
        alert(`${movie.movie_title}`);
    } catch (err) {
        console.error('Error fetching random requested movie:', err);
        alert('Failed to fetch a random requested movie.');
    }
});

document.addEventListener('click', function(event) {
    document.querySelectorAll('.specials-dropdown').forEach(function(dropdown) {
        if (!dropdown.contains(event.target) && !event.target.classList.contains('specials-button')) {
            dropdown.style.display = 'none';
        }
    });
});

form.addEventListener('submit', submitHandler);

getAllMovies();
getRequestedMovies();
