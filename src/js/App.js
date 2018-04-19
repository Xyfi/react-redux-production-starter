import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Slider } from './slider';

// Global styles
import "../global-styles/main.scss";

// Local styles
import styles from "./app.scss";

const slides = [
    {
        header: "Welcome",
    },
    {
        header: "Enzyme",
    }
]

class App extends Component {
    render() {
        return (
            <div className={styles.background} id="wrapper">
                <h1 className={styles.header}>Testing React</h1>
                <Slider slides={ slides } />
            </div>
        );
    }
}

export default hot(module)(App);
