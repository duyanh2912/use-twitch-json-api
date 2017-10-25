import {action, createTransformer, observable, useStrict} from "mobx";
import {fetchUsers, Streamer} from "./api";

useStrict(true);

export class AppState {
    @observable streamers: Streamer[] = [];

    getChannelLink = createTransformer((streamer: Streamer) =>
        `https://www.twitch.tv/${streamer.name}`
    );

    @action loadData = async (streamers: string[]) => {
        this.setStreamers(await fetchUsers(streamers));
    }

    @action private setStreamers = (s: Streamer[]) => {
        this.streamers = s;
    }
}

export default new AppState();
