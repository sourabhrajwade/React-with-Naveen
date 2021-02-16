import {createStore, applyMiddleware} from 'redux'
import {loginReducer} from './login';
import thunk from 'redux-thunk';

export const store = createStore(loginReducer, applyMiddleware(thunk));

