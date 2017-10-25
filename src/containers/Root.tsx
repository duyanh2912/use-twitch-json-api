import * as React from "react";
import {Provider} from "mobx-react";
import App from "./App";
import AppState from "../store";

const Root: React.SFC<{}> = () => (
    <Provider appState={AppState}>
        <App/>
    </Provider>
);

export default Root;