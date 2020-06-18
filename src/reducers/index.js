import ErrorReducer from './ErrorReducer';
import RegistrationReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import Feed from './FeedReducer';
import {  combineReducers } from 'redux';

export default combineReducers({
    errorHandler: ErrorReducer,
    registrationSuccess : RegistrationReducer,
    Feed,
    LoginReducer
})