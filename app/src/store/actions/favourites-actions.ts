import { Dispatch } from 'redux';
import { deleteFavoritesMoviesInLS, setFavoritesMoviesInLS } from '../../services/services';
import { Movie } from '../../types/movies';
import { favouritesActions, favouritesActionTypes } from './../../types/favourites';

export const addFavouritesAction = (value: Movie) => {
    return (dispatch: Dispatch<favouritesActions>) => {
      setFavoritesMoviesInLS(value)

      dispatch({ type: favouritesActionTypes.ADD_FAVOURITES, payload: value})
    }
  }

  export const deleteFavouritesAction = (value: string) => {
    return (dispatch: Dispatch<favouritesActions>) => {
      deleteFavoritesMoviesInLS(value);
      dispatch({ type: favouritesActionTypes.DELETE_FAVOURITES, payload: value});
    }
  }
