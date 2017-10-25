import {Injected} from "../store/index";
import * as React from "react";
import PeopleView from "../components/PeopleView";
import {inject, observer} from "mobx-react";
import "./StreamerList.css";

@inject("appState")
@observer
class StreamerList extends React.Component<Injected, {}> {
    render() {
        const state = this.props.appState!;
        const streamers = state.streamers;

        return (
            <div className="streamer-list">
                {streamers.map(s =>
                    <PeopleView
                        title={s.name}
                        key={s.name}
                        subTitle={s.streamDesc || "Offline"}
                        imgSrc={s.picUrl || "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"}
                        href={state.getChannelLink(s)}
                        active={s.isStreaming}
                    />
                )}
            </div>
        );
    }
}

export default StreamerList;