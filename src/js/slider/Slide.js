import React, { Component } from "react";

import styles from "./style.scss";

class Slide extends Component {
    render() {
        const slide = this.props.data;
        return (
            <div className={ styles.slide }>
                <h2 className={ styles.header }>{ slide.header }</h2>
            </div>
        );
    }
}

export default Slide;
