import {action, createTransformer, observable, useStrict} from "mobx";
import {fetchUsers, Streamer} from "./api";

useStrict(true);

export interface Injected {
    appState?: AppState;
}

export class AppState {
    @observable streamers: Streamer[] = [];
    @observable loading: boolean = false;

    getChannelLink = createTransformer((streamer: Streamer) =>
        `https://www.twitch.tv/${streamer.name}`
    );

    @action loadData = async (streamers: string[]) => {
        this.setLoading(true);
        this.setStreamers(await fetchUsers(streamers));
        this.setLoading(false);
    }

    @action private setStreamers = (s: Streamer[]) => {
        this.streamers = s;
    }

    @action private setLoading = (_: boolean) => this.loading = _;
}

export default new AppState();
