# MoviesGapstars

## Application Setting up
1. Install VSCODE.
2. Install Node
3. Install NPM.
4. Checkout code from git hub using git clone https://github.com/indunilw/gapstars-movies.git
5. Open files from visual studio code.
6. Open command prompt/terminal from the main folder.
7. Run npm install.
8. Run ng build
9. Run ng serve
10. Access application using localhost:4200/


## Backend APIs
• APIs are taken from the http://www.omdbapi.com/.
Setting up from API KEY.
1. Navigate to http://www.omdbapi.com/
2. Navigate to API Key tab
3. Select Free account type and register using an email.
4. Verify the generated key from the email.
5. Add the new key to the environment.ts file’ API_KEY variable.


## Testing the APIs
• APIs can be tested using the Postman application.

• Two APIs are used to build the application.


### Testing steps for fetching movie list from OMDB server.
1. Load postman and get a new window.
2. Select GET as the request type.
3. Add https://omdbapi.com/?apikey=${this.API_KEY}&s=${movieSearch} as the URL.
4. Set values in the query params. (API_KEY : the API key, movieSearch : String to search)
5. Send request.


### Testing steps to receive movie details from the OMDB server.
1. Load postman and get a new window.
2. Select GET as the request type.
3. Add https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${movieId}&plot=short as the URL.
4. Set values in the query params. (API_KEY : the API key, movieId : ID retrieved from movie list, plot can be either full or short)
5. Send request.
