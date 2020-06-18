import reducers from './index';
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";




export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [thunk];

  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware)
      /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() */
    )
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
