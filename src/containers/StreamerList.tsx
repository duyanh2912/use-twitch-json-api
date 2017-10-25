import {Injected} from "../store/index";
import * as React from "react";
import PeopleView from "../components/PeopleView";
import {inject, observer} from "mobx-react";
import "./StreamerList.css";

@inject("appState")
@observer
class StreamerList extends React.Component<Injected, {}> {
    state = this.props.appState!;

    render() {
        const loading = this.state.loading;
        const child = loading ? this.renderLoading() : this.renderList();

        return (
            <div className="streamer-list">
                {child}
            </div>
        );
    }

    renderLoading = () => {
        return Array(8).fill(0).map((_,i) => (
            <PeopleView loading={true} key={i}/>
        ));
    }

    renderList = () => this.state.streamers.map(s => (
            <PeopleView
                title={s.name}
                key={s.name}
                subTitle={s.streamDesc || "Offline"}
                imgSrc={s.picUrl || "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"}
                href={this.state.getChannelLink(s)}
                active={s.isStreaming}
            />
        )
    )
}

export default StreamerList;