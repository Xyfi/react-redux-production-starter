import React, { Component } from "react";

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

export default App;
