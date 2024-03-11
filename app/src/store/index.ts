import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';

export const store = createStore<any, any, {}, {}>(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
