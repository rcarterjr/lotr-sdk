# Russ-LOTR-SDK

## Setup


###### Install: `npm i russ-sdk`
###### NPM: https://www.npmjs.com/package/russ-sdk
###### API documentation: https://the-one-api.dev/documentation
######  Generate an API key from the official docs above

## Usage


* Import the module into your project, and initialize the client with the API key
    1. `const lotrClient = require("russ-sdk");`
    1. `const app = new lotrClient(API_KEY);`

### From here, you can use `app` to retrieve all LOTR movies, one movie by `id`, or quotes from a movie.

### Examples
```
app.getAllMovies() // returns all LOTR movies
app.getMovieById(<movie_id>) // returns one movie
```

#### To get all movies with a Rotten Tomatoe score >= 94
```
app.getMovieByFilter("rottenTomatoesScore", ">=", 94);
```