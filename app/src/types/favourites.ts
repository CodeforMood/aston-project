import { Movie } from "./movies"

export enum favouritesActionTypes {
  ADD_FAVOURITES = "ADD_FAVOURITES",
  DELETE_FAVOURITES = "DELETE_FAVOURITES",
  LOAD_FAVOURITES = "LOAD_FAVOURITES",
}

export type favouritesAddAction = {
  type: favouritesActionTypes.ADD_FAVOURITES,
  payload: Movie
}

export type favouritesDeleteAction = {
  type: favouritesActionTypes.DELETE_FAVOURITES,
  payload: string
}

export type favouritesStateType = {
  favourites: Movie[]
}

export type favouritesLoadAction = {
  type: favouritesActionTypes.LOAD_FAVOURITES,
  payload: Movie[],
}

export type favouritesActions = favouritesAddAction | favouritesDeleteAction | favouritesLoadAction
