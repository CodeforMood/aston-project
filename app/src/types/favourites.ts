import { Movie } from "./movies"

export enum favouritesActionTypes {
  ADD_FAVOURITES = "ADD_FAVOURITES",
  DELETE_FAVOURITES = "DELETE_FAVOURITES"
}

export type favouritesAddAction = {
  type: favouritesActionTypes.ADD_FAVOURITES,
  payload: Movie
}

export type favouritesDeleteAction = {
  type: favouritesActionTypes.DELETE_FAVOURITES,
  payload: number
}

export type favouritesStateType = {
  favourites: Movie[]
}

export type favouritesActions = favouritesAddAction | favouritesDeleteAction
