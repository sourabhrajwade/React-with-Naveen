import loginReducer from './login/LoginReducer';
import {combineReducers} from 'redux';


export const reducers =combineReducers( {
    login: loginReducer
});

