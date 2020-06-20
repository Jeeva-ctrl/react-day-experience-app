import reducers from './index';
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";




export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [thunk];
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
    const enhancer = composeEnhancers(
      applyMiddleware(...middleware),
      // other store enhancers if any
    );



  const store = createStore(
    reducers,
    initialState,
    enhancer
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      LoginReducer: state.LoginReducer,
    };

    window.localStorage.setItem('state', JSON.stringify(persist));
  });

  return store;
};
