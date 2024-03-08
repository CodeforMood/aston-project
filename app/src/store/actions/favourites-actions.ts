import { Movie } from '../../types/movies';
import { favouritesActionTypes } from './../../types/favourites';

export const addFavouritesAction = (value: Movie) => ({ type: favouritesActionTypes.ADD_FAVOURITES, payload: value});

export const deleteFavouritesAction = (value: string) => ({ type: favouritesActionTypes.DELETE_FAVOURITES, payload: value });
