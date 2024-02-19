
namespace PropData {
    type MusicListItem = {
        id: string,
        img: ImageSourcePropType,
        title: string,
        duration: string
    }
}
namespace PropTypes {
    type MusicListItemIterables = {
        data: PropData.MusicListItem,
        selected?: boolean
    }
    type MusicListItem = {
        data: PropData.MusicListItem,
        selected?: boolean,
        onClick: (id: string) => void
    }
}
