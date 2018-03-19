import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./App"
import TopLevelComponents from "./TopLevelComponents";
import DevTools from "./DevTools";

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <TopLevelComponents>
                <div>
                    <Component />
                    <DevTools />
                </div>
            </TopLevelComponents>
        </AppContainer>,
        document.getElementById('app')
    )
}

render(App);
