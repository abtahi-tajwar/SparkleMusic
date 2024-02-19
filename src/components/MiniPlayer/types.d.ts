namespace PropTypes {
    type MiniPlayer = {
        data: {
            title: string,
            duration: string
        },
        status: Store.MusicStatus,
        onPause: () => void,
        onPlay: () => void,
        onReplay: () => void
    }
}