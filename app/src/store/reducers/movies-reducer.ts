import { MoviesState, MoviesAction, MoviesActionTypes } from "../../types/movies";

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const moviesReducer = (state: MoviesState = initialState, action: MoviesAction): MoviesState => {
  // console.log(state);
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES:
      return { ...state, loading: true, error: null, movies: [] }
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, error: null, movies: action.payload }
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload, movies: [] }
    default:
      return state
  }
};
