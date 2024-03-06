import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import { RootState } from './reducers'
import { MoviesAction } from '../types/movies';
import { AuthAction } from '../types/auth';
 

export const store = createStore<RootState, MoviesAction, AuthAction>(rootReducer, applyMiddleware(thunk));

