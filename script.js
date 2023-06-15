// MOVIES API
const MOVIE_API = "8b667698";
const MOVIE_URL = `http://www.omdbapi.com/?apikey=${MOVIE_API}`;

// Fetch Movies
function fetchMovies() {
  const randomSearchTerm = generateRandomSearchTerm();
  axios
    .get(`${MOVIE_URL}&type=movie&s=${randomSearchTerm}`)
    .then(response => {
      const movies = response.data.Search;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovieTitle = movies[randomIndex].Title;
      const randomMovieImage = movies[randomIndex].Poster;

      document.getElementById('movieTitle').innerHTML = randomMovieTitle;
      document.getElementById('movieImage').src = randomMovieImage;
      document.getElementById('movieImage').alt = randomMovieTitle;
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
}

function generateRandomSearchTerm() {
  const randomWords = ['titanic', 'superman', 'batman', 'mid', 'inception', 'avengers', 'jurassic park', 'the matrix', 'star wars', 'forrest gump'];
  const randomIndex = Math.floor(Math.random() * randomWords.length);
  return randomWords[randomIndex];
}


// Drinks API
const ALCOHOLIC_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

// Fetch Drinks
function fetchDrinks() {
  return axios
    .get(ALCOHOLIC_URL)
    .then(response => {
      const drinks = response.data.drinks;
      const randomIndex = Math.floor(Math.random() * drinks.length);
      const randomDrink = drinks[randomIndex];
      const drinkName = randomDrink.strDrink;
      const drinkImage = randomDrink.strDrinkThumb;

      // Update the HTML elements with the randomized drink and its image
      document.getElementById('drinkResult').textContent = drinkName;
      document.getElementById('drinkImage').src = drinkImage;
      document.getElementById('drinkImage').alt = drinkName;
    })
    .catch(error => {
      console.error(error);
    });
}
// fetchDrinks();


document.addEventListener('DOMContentLoaded', () => {
  const discoverButton = document.getElementById('discoverButton');
  discoverButton.addEventListener('click', () => {
    // const genre = document.getElementById('genre').value;
    
    // Fetch a random movie and a random drink
    Promise.all([fetchMovies(), fetchDrinks()])
      .then(() => {
        // Both requests have been completed
        console.log('Random movie and drink fetched!');
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
  });
});
