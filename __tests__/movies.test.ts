require("dotenv").config();

const { API_KEY } = process.env;
const movieClient = require("../movies");

const client = new movieClient(API_KEY);

const movieIds = [
  "5cd95395de30eff6ebccde56",
  "5cd95395de30eff6ebccde57",
  "5cd95395de30eff6ebccde58",
  "5cd95395de30eff6ebccde59",
  "5cd95395de30eff6ebccde5a",
  "5cd95395de30eff6ebccde5b",
  "5cd95395de30eff6ebccde5c",
  "5cd95395de30eff6ebccde5d"
];

describe('List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies', () => {
  it("should return a list of all movies", async () => {
    const movies = await client.getAllMovies();
    expect(movies.map((m: Movie) => m._id)).toEqual(movieIds);
  });
});

describe("Request one specific movie", () => {
  it("should return the entire movie object", async () => {
    const movie = await client.getMovieById("5cd95395de30eff6ebccde56");
    expect(movie).toEqual([
      {
        _id: "5cd95395de30eff6ebccde56",
        name: "The Lord of the Rings Series",
        runtimeInMinutes: 558,
        budgetInMillions: 281,
        boxOfficeRevenueInMillions: 2917,
        academyAwardNominations: 30,
        academyAwardWins: 17,
        rottenTomatoesScore: 94
      }
    ]);
  });
});

describe("Request all movie quotes for one specific movie (only working for the LotR trilogy)", () => {
  it("should return a quote from the movie, give the movie _id", async () => {
    const expected = [
      {
        _id: "5cd96e05de30eff6ebcced61",
        dialog: "Who is she? This woman you sing of?",
        movie: "5cd95395de30eff6ebccde5c",
        character: "5cd99d4bde30eff6ebccfc15",
        id: "5cd96e05de30eff6ebcced61"
      }
    ];
    const quote = await client.getQuoteByMovieId("5cd95395de30eff6ebccde5c");

    expect(quote).toEqual(expect.arrayContaining(expected));
  });
});
