// MOVIES API
const MOVIE_URL = "http://www.omdbapi.com/";
const MOVIE_API = "8b667698";

// Fetch Genre
function fetchMovies() {
    axios
        .get(`${MOVIE_URL}?i=tt3896198&apikey=${MOVIE_API}`)
        .then((response) => {
            console.log(response.data);

        })
        .catch((error) => {
            console.error(error);
        });
}

(fetchMovies())

// Fetch Ratings



// // DRINKS API
const DRINKS_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// Fetch Drinks
function fetchDrinks() {
    axios
        .get(`${DRINKS_URL}`)
        .then((response) => {
            console.log(response.data);

        })
        .catch((error) => {
            console.error(error);
        });
}

(fetchDrinks())