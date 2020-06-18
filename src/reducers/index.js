import ErrorReducer from './ErrorReducer';
import RegistrationReducer from './RegisterReducer';
import Feed from './FeedReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';

export default combineReducers({
    errorHandler: ErrorReducer,
    registrationSuccess : RegistrationReducer,
    Feed
})