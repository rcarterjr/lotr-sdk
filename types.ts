type Movie = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
};

type Quote = {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
};

enum FilterEnum {
  budgetInMillions,
  runtimeInMinutes,
  academyAwardNominations,
  academyAwardWins,
  boxOfficeRevenueInMillions,
  rottenTomatoesScore
}

type Filter = keyof typeof FilterEnum;

type Docs = Movie[] | Quote[] | Movie | Quote;

type Response = {
  docs: Docs;
  total: number;
  limit: number;
  page: number;
  pages: number;
  offset: number;
};
