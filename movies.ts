// const fetch = require("node-fetch");
const axios = require("axios");
const BASE_URL = "https://the-one-api.dev/v2";

// type Movie = {
//   _id: string;
//   name: string;
//   runtimeInMinutes: number;
//   budgetInMillions: number;
//   boxOfficeRevenueInMillions: number;
//   academyAwardNominations: number;
//   academyAwardWins: number;
//   rottenTomatoesScore: number;
// };

class MovieClient {
  constructor(private apiKey: string) {
    this.apiKey = apiKey;
  }

  async getAllMovies(): Promise<Movie[]> {
    const response = await axios(`${BASE_URL}/movie`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });
    const data: any = await response.data; // TODO: update this type
    return data.docs;
  }

  async getMovieById(id: string): Promise<Movie> {
    const response = await axios(`${BASE_URL}/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });
    const data: any = await response.data; // TODO: update this type
    return data.docs;
  }

  async getQuoteByMovieId(id: string): Promise<string> {
    const response = await axios(`${BASE_URL}/movie/${id}/quote`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });
    const data: any = await response.data; // TODO: update this type
    return data.docs;
  }
}

module.exports = MovieClient;
