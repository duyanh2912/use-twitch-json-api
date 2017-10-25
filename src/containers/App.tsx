import * as React from "react";
import {inject, observer} from "mobx-react";
import {AppState} from "../store/index";
import DevTools from "mobx-react-devtools";
import StreamerList from "./StreamerList";
import "./App.css";

interface AppProps {
    appState?: AppState;
}

@inject("appState")
@observer
class App extends React.Component<AppProps, {}> {
    componentDidMount() {
        this.props.appState!.loadData(["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
            "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]);
    }

    render() {
        return (
            <div className="app">
                <DevTools/>
                <h1>Twitch JSON API</h1>
                <StreamerList/>
            </div>
        );
    }
}

export default App;