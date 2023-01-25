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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const { API_KEY } = process.env;
const movies_1 = require("../fixtures/movies");
// const movieClient = require("../index");
const movieClient = require("russ-sdk");
const client = new movieClient(API_KEY);
describe('List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies', () => {
    it("should return a list of all movies", () => __awaiter(void 0, void 0, void 0, function* () {
        const movies = yield client.getAllMovies();
        expect(movies).toEqual(movies_1.allMovies);
    }));
});
describe("Request one specific movie", () => {
    it("should return the entire movie object", () => __awaiter(void 0, void 0, void 0, function* () {
        const { id, movie: expectedMovie } = movies_1.idAndMovie;
        const movie = yield client.getMovieById(id);
        expect(movie).toEqual([expectedMovie]);
    }));
});
describe("Request all movie quotes for one specific movie (only working for the LotR trilogy)", () => {
    it("should return a quote from the movie, give the movie _id", () => __awaiter(void 0, void 0, void 0, function* () {
        const { id, quote: expected } = movies_1.idAndQuote;
        const quote = yield client.getQuotesByMovieId(id);
        expect(quote).toEqual(expect.arrayContaining([expected]));
    }));
});
describe("Request all movies with the given Filters", () => {
    it("should return all movies with a budget under 100 million", () => __awaiter(void 0, void 0, void 0, function* () {
        const movies = yield client.getMovieByFilter("budgetInMillions", "<", 100);
        expect(movies).toEqual(movies_1.budgetUnder100);
    }));
    it("should return all movies with a rotten tomatoe score greater than or equal 94", () => __awaiter(void 0, void 0, void 0, function* () {
        const movies = yield client.getMovieByFilter("rottenTomatoesScore", ">=", 94);
        expect(movies).toEqual(movies_1.greaterOrEqual94Tomatoes);
    }));
});
