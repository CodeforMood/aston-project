
import { Dispatch } from "redux";
import { FetchMoviesAction, FetchMoviesErrorAction, FetchMoviesSuccessAction, Movie, MoviesAction, MoviesActionTypes } from "../../types/movies"
import { getMovies } from "../../utils/Api";
import { fetchError } from "../../utils/const";

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
      const movies = await getMovies(keyword);
      dispatch(fetchMoviesSuccess(movies))
    } catch (error) {
      dispatch(fetchMoviesError(fetchError))
    }
  }
}
