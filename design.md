# Design

API: https://the-one-api.dev/v2

## Tools

I decided to use TypeScript for this application. I wrote my tests using Jest, accessed the API with Axios, and published the SDK via [NPM](https://www.npmjs.com/package/russ-sdk).

I also used `dotenv` to access our API Key as an environment variable.


## Info

I created a MovieClient class which takes the user's API Key in the constructor and stores it to access the LOTR endpoints.

I wrote methods for accessing each movie endpoint along with tests for each.


## Improvements
Since this SDK is only interested in the Movies endpoint, I put all of the app logic in the main file `index.ts` for simplicity.

If we were accessing other endpoints, I would have broken it down into separate files.
