import { Dispatch } from "redux"
import { MoviesAction, MoviesActionTypes } from "../../types/movies"

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({type: MoviesActionTypes.FETCH_MOVIES})
      const response = await fetch('https://search.imdbot.workers.dev/?q=Niram');
      const json = await response.json();
      const movies = await json.description;
      // console.log(movies);
      dispatch({type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: movies})
    } catch (error) {
      dispatch({type: MoviesActionTypes.FETCH_MOVIES_ERROR, payload: 'Ошибка при загрузке запроса!'})
    }
  }
}