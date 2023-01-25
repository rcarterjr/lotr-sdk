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
// const fetch = require("node-fetch");
const axios = require("axios");
const BASE_URL = "https://the-one-api.dev/v2";
class MovieClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiKey = apiKey;
    }
    getAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios(`${BASE_URL}/movie`, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`
                    }
                });
                const data = yield response.data; // TODO: update this type
                return data.docs;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id)
                    throw new Error("No id provided");
                const response = yield axios(`${BASE_URL}/movie/${id}`, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`
                    }
                });
                const data = yield response.data; // TODO: update this type
                return data.docs;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getQuotesByMovieId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id)
                    throw new Error("No id provided");
                const response = yield axios(`${BASE_URL}/movie/${id}/quote`, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`
                    }
                });
                const data = yield response.data; // TODO: update this type
                return data.docs;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    /*
      this method compares `value` with number values such as `budgetInMillions` or `runtimeInMinutes`
      Ex: /movie?budgetInMillions<100
    */
    getMovieByFilter(filter, operator, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!filter || !operator || value == null)
                    throw new Error("invalid params");
                const response = yield axios(`${BASE_URL}/movie?${filter}${operator}${value}`, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`
                    }
                });
                const data = yield response.data; // TODO: update this type
                return data.docs;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
module.exports = MovieClient;
