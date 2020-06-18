import reducers from './index';
import { compose, createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";

const middleWare = [thunk];
let initialState = {};
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleWare),
  // other store enhancers if any
);
const store = createStore(
  reducers,
  initialState,
  enhancer
);
export default store;