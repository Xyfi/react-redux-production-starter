import React from "react";
import ReactDOM from "react-dom";

import "../css-global";

import App from "./App";
import TopLevelComponents from "./TopLevelComponents";

const render = Component => {
    ReactDOM.render(
        <TopLevelComponents>
            <Component />
        </TopLevelComponents>,
        document.getElementById('app')
    )
}

render(App);
