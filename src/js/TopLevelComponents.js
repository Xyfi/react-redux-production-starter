import React from "react";
import {
    ConnectedRouter as Router
} from "react-router-redux";
import {
    Provider
} from "react-redux";
import createHistory from "history/createBrowserHistory";

import configureStore from "./configureStore";

const history = createHistory();
const store = configureStore(history);

class TopLevelComponents extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    { this.props.children }
                </Router>
            </Provider>
        );
    }
}

export default TopLevelComponents;
