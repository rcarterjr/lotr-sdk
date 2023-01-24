"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    it("should return a list of all movies", () => __awaiter(void 0, void 0, void 0, function* () {
        const movies = yield client.getAllMovies();
        expect(movies.map((m) => m._id)).toEqual(movieIds);
    }));
});
describe("Request one specific movie", () => {
    it("should return the entire movie object", () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = yield client.getMovieById("5cd95395de30eff6ebccde56");
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
    }));
});
describe("Request all movie quotes for one specific movie (only working for the LotR trilogy)", () => {
    it("should return a quote from the movie, give the movie _id", () => __awaiter(void 0, void 0, void 0, function* () {
        const expected = [
            {
                _id: "5cd96e05de30eff6ebcced61",
                dialog: "Who is she? This woman you sing of?",
                movie: "5cd95395de30eff6ebccde5c",
                character: "5cd99d4bde30eff6ebccfc15",
                id: "5cd96e05de30eff6ebcced61"
            }
        ];
        const quote = yield client.getQuoteByMovieId("5cd95395de30eff6ebccde5c");
        console.log("QUOTE", quote);
        expect(quote).toEqual(expect.arrayContaining(expected));
    }));
});
