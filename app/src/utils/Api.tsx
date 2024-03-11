export const getMovies = async (value: string) => {
  const response = await fetch(`https://search.imdbot.workers.dev/?q=${value}`);
  const json = await response.json();
  const movies = await json.description;
  return movies
}