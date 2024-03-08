export interface MoviesState {
  movies: any[],
  loading: boolean,
  error: null | string,
};

// интерфейс одного фильма
export interface Movie {
  '#ACTORS': string,
  '#AKA': string,
  '#IMDB_ID': string,
  '#IMDB_IV': string,
  '#IMDB_URL': string,
  '#IMG_POSTER': string,
  '#RANK': number,
  '#TITLE': string,
  '#YEAR': number,
  'photo_height': number,
  'photo_width': number,
}

export enum MoviesActionTypes {
  FETCH_MOVIES = "FETCH_MOVIES",
  FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR"
};

export interface FetchMoviesAction {
  type: MoviesActionTypes.FETCH_MOVIES,
};

export interface FetchMoviesSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: any[],
};

export interface FetchMoviesErrorAction {
  type: MoviesActionTypes.FETCH_MOVIES_ERROR,
  payload: string,
};

export type MoviesAction = FetchMoviesAction | FetchMoviesSuccessAction | FetchMoviesErrorAction;
