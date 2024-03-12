import { apiDomain } from "./const";

export const getMovies = async (value: string) => {
  const response = await fetch(`${apiDomain}/?q=${value}`);
  const json = await response.json();
  const movies = await json.description;
  return movies
}