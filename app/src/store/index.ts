import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import { RootState } from './reducers'
import { MoviesAction } from '../types/movies';
 

export const store = createStore<RootState, MoviesAction>(rootReducer, applyMiddleware(thunk));

