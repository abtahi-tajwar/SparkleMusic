
namespace PropData {
    type MusicListItem ={
        img: ImageSourcePropType,
        title: string,
        duration: string
    }
}
namespace PropTypes {
    type MusicListItem = {
        data: PropData.MusicListItem
    }
}
