"use strict";
// const axios = require("axios");
// const BASE_URL = "https://the-one-api.dev/v2";
// class MovieClient {
//   constructor(private apiKey: string) {
//     this.apiKey = apiKey;
//   }
//   async getAllMovies(): Promise<Movie[] | undefined> {
//     try {
//       const response = await axios(`${BASE_URL}/movie`, {
//         headers: {
//           Authorization: `Bearer ${this.apiKey}`
//         }
//       });
//       const data: any = await response.data; // TODO: update this type
//       return data.docs;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   async getMovieById(id: string): Promise<Docs | undefined> {
//     try {
//       if (!id) throw new Error("No id provided");
//       const response = await axios(`${BASE_URL}/movie/${id}`, {
//         headers: {
//           Authorization: `Bearer ${this.apiKey}`
//         }
//       });
//       const data: Response = await response.data;
//       return data.docs;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   async getQuotesByMovieId(id: string): Promise<Docs | undefined> {
//     try {
//       if (!id) throw new Error("No id provided");
//       const response = await axios(`${BASE_URL}/movie/${id}/quote`, {
//         headers: {
//           Authorization: `Bearer ${this.apiKey}`
//         }
//       });
//       const data: Response = await response.data; // TODO: update this type
//       return data.docs;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   /*
//     this method compares `value` with number values such as `budgetInMillions` or `runtimeInMinutes`
//     Ex: /movie?budgetInMillions<100
//   */
//   async getMovieByFilter(
//     filter: Filter,
//     operator: "<" | ">" | "<=" | ">=" | "==",
//     value: number
//   ): Promise<Docs | undefined> {
//     try {
//       if (!filter || !operator || value == null)
//         throw new Error("invalid params");
//       const response = await axios(
//         `${BASE_URL}/movie?${filter}${operator}${value}`,
//         {
//           headers: {
//             Authorization: `Bearer ${this.apiKey}`
//           }
//         }
//       );
//       const data: Response = await response.data;
//       return data.docs;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
// module.exports = MovieClient;
