import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import { RootState } from './reducers'
import { MoviesAction } from '../types/movies';
import { AuthAction } from '../types/auth';
import { historyActions } from '../types/history';
import { favouritesActions } from '../types/favourites';
import { Action } from '../types';

export const store = createStore<any, any, {}, {}>(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
