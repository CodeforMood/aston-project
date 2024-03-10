
import { Dispatch } from "redux";
import { FetchMoviesAction, FetchMoviesErrorAction, FetchMoviesSuccessAction, Movie, MoviesAction, MoviesActionTypes } from "../../types/movies"

export const fetchMoviesRequest: () => FetchMoviesAction = () => ({ type: MoviesActionTypes.FETCH_MOVIES});

export const fetchMoviesSuccess = (movies: Movie[]): FetchMoviesSuccessAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const fetchMoviesError = (error: string): FetchMoviesErrorAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_ERROR,
  payload: error
});


export const fetchMovies = (keyword: string) => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch(fetchMoviesRequest())
      const response = await fetch(`https://search.imdbot.workers.dev/?q=${keyword}`);
      const json = await response.json();
      const movies = await json.description;
      // console.log(movies);
      dispatch(fetchMoviesSuccess(movies))
    } catch (error) {
      dispatch(fetchMoviesError('Ошибка при загрузке запроса!'))
    }
  }
}
