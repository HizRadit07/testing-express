# testing-express

Hello , this is a repository i made for the BukitVista assessment, also as a personal project i'm trying to work on<br>

this is an api that can return movie posters from an online database, the database is managed by me using mysql and is a dummy database<br>

To make sure that the application can run, please make sure the following are installed <br>
1. Node JS and Javascript <br>
2. Nodemon module for javascript <br>

To run this API, here are some steps to follow <br>
1. open the application from the terminal<br>
2. run the following code: npm run dev<br>
3. open localhost:3000 on your browser<br>

Endpoints for this API include <br>
1. /myAPI/movies/{movie title} a get endpoint that returns a movie poster based on the parameters {movie title}<br>
2. /movies/favorite/{user id} a get endpoint that returns movie posters for a particular user based on the {user id} parameter (integer from 1-3 according to the dummy database)<br>
3. /movies/favorite a post endpoint for posting a new favorite movies based on the parameters in the request body (in the form of json) <br>

This API also uses a third party API to get the movie poster, the full documentation can be read here http://www.omdbapi.com/#usage


