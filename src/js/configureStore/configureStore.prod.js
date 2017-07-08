import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../reducers";

export default function configureStore(history, initialState) {
  // Middleware you want to use in production:
  const enhancer = applyMiddleware(thunk, routerMiddleware(history));

  return createStore(rootReducer, initialState, enhancer);
};
