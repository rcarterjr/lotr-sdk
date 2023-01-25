require("dotenv").config();

const { API_KEY } = process.env;
import {
  allMovies,
  idAndMovie,
  idAndQuote,
  budgetUnder100,
  greaterOrEqual94Tomatoes
} from "../fixtures/movies";

const movieClient = require("russ-sdk");
const client = new movieClient(API_KEY);

describe('List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies', () => {
  it("should return a list of all movies", async () => {
    const movies = await client.getAllMovies();

    expect(movies).toEqual(allMovies);
  });
});

describe("Request one specific movie", () => {
  it("should return the entire movie object", async () => {
    const { id, movie: expectedMovie } = idAndMovie;
    const movie = await client.getMovieById(id);

    expect(movie).toEqual([expectedMovie]);
  });
});

describe("Request all movie quotes for one specific movie (only working for the LotR trilogy)", () => {
  it("should return a quote from the movie, give the movie _id", async () => {
    const { id, quote: expected } = idAndQuote;
    const quote = await client.getQuotesByMovieId(id);

    expect(quote).toEqual(expect.arrayContaining([expected]));
  });
});

describe("Request all movies with the given Filters", () => {
  it("should return all movies with a budget under 100 million", async () => {
    const movies = await client.getMovieByFilter("budgetInMillions", "<", 100);

    expect(movies).toEqual(budgetUnder100);
  });

  it("should return all movies with a rotten tomatoe score greater than or equal 94", async () => {
    const movies = await client.getMovieByFilter(
      "rottenTomatoesScore",
      ">=",
      94
    );

    expect(movies).toEqual(greaterOrEqual94Tomatoes);
  });
});
