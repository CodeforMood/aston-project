import { combineReducers } from "redux";
import { moviesReducer } from './moviesReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
})

export type RootState = ReturnType<typeof rootReducer>;