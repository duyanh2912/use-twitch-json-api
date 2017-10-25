export interface Streamer {
    name: string;
    isStreaming: boolean;
    streamDesc?: string;
    picUrl: string;
}

const endPoint = "https://wind-bow.glitch.me/twitch-api";

export const fetchUsers = async (names: string[]): Promise<Streamer[]> => {
    const promises = names
        .map(name => fetchUser(name)
            .catch((err) => {
                console.error(err);
                return undefined;
            })
        );
    return (await Promise.all(promises)).filter(e => e) as Streamer[];
};

const fetchUser = async (name: string): Promise<Streamer> => {
    return {...await fetchUserInfo(name), ...await fetchUserStream(name)};
};

const fetchUserInfo = async (name: string): Promise<Pick<Streamer, "name" | "picUrl">> => {
    const body = await fetch(`${endPoint}/users/${name}`);
    const data = await body.json();

    if (data.error) {
        throw new Error(data.status + " " + data.error);
    }

    return {
        name: data.display_name,
        picUrl: data.logo
    };
};

const fetchUserStream = async (name: string): Promise<Pick<Streamer, "isStreaming" | "streamDesc">> => {
    const body = await fetch(`${endPoint}/streams/${name}`);
    const data = await body.json();

    if (data.stream) {
        return {
            isStreaming: true,
            streamDesc: data.stream.game + ": " + data.stream.channel.status
        };
    } else {
        return {
            isStreaming: false,
        };
    }
};