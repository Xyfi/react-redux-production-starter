import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../reducers";
import DevTools from "../DevTools";

// Middleware you want to use in development:


export default function configureStore(history, initialState) {
    const middleware = applyMiddleware(thunk, routerMiddleware(history));
    const enhancer = compose(
        middleware,
        DevTools.instrument()
    )
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers", () => {
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
