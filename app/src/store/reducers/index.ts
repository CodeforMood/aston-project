import { combineReducers } from "redux";
import { moviesReducer } from './movies-reducer'
import { authReducer } from "./auth-reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>;