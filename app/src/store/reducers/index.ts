import { combineReducers } from "redux";
import { moviesReducer } from './movies-reducer'
import { authReducer } from "./auth-reducer";
import { historyReducer } from "./history-reducer";
import { favouritesReducer } from "./favourites-reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  favourites: favouritesReducer,
  history: historyReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
