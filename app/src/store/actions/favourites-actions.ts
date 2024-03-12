import { Dispatch } from 'redux';
import { deleteFavoritesMoviesInLS, setFavoritesMoviesInLS } from '../../services/services';
import { Movie } from '../../types/movies';
import { favouritesActions, favouritesActionTypes } from './../../types/favourites';

export const loadFavouritesAction = (movies: Movie[]): favouritesActions => ({type: favouritesActionTypes.LOAD_FAVOURITES, payload: movies});
export const addFavouriteMovie = (movie: Movie): favouritesActions => ({type: favouritesActionTypes.ADD_FAVOURITES, payload: movie});
export const deleteFavouriteMovie = (value: string): favouritesActions => ({type: favouritesActionTypes.DELETE_FAVOURITES, payload: value})

export const addFavouritesAction = (movie: Movie) => {
    return (dispatch: Dispatch<favouritesActions>) => {
      setFavoritesMoviesInLS(movie);
      dispatch(addFavouriteMovie(movie));
    }
  }

  export const deleteFavouritesAction = (value: string) => {
    return (dispatch: Dispatch<favouritesActions>) => {
      deleteFavoritesMoviesInLS(value);
      dispatch(deleteFavouriteMovie(value));
    }
  }
  