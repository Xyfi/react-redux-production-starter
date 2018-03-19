import React, { Component } from "react";
import { hot } from "react-hot-loader";

// Global styles
import "../global-styles/main.scss";

// Local styles
import styles from "./app.scss";

class App extends Component {
    render() {
        return (
            <h1 className={styles.color}>Welcome to React Redux Production Starter!!!</h1>
        );
    }
}

export default hot(module)(App);
