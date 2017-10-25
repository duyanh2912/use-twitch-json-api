import {inject, observer} from "mobx-react";
import * as React from "react";
import {AppState} from "../store/index";
import SearchBar from "../components/SearchBar";
import {SyntheticEvent} from "react";

interface StreamerSearchBarInterface {
    appState?: AppState;
}

@inject("appState")
@observer
class StreamerSearchBar extends React.Component<StreamerSearchBarInterface,{}> {
    render() {
        return <SearchBar placeholder="Search for a streamer" onTextChange={this.onTextChange}/>;
    }

    onTextChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value;
        console.log(input);
    }
}

export default StreamerSearchBar;