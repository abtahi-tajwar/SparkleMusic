import React, { Component, useEffect, useState } from "react"
import { FlatList, View, Text, StyleSheet } from "react-native"
import Container from "../../../components/Container"
// import MusicImage1 from '../../../../assets/dev/music-2.png'
// import MusicImage2 from '../../../../assets/dev/music-3.png'
// import MusicImage3 from '../../../../assets/dev/music-4.png'
// import MusicImage4 from '../../../../assets/dev/music-5.png'

const MusicImage1 = require('../../../../assets/dev/music-2.png');
const MusicImage2 = require('../../../../assets/dev/music-3.png');
const MusicImage3 = require('../../../../assets/dev/music-5.png');
const MusicImage4 = require('../../../../assets/dev/music-6.png');

import { Header, MusicListItem, MiniPlayer, PermissionError } from "../../../components"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getMusicsFromDevice, pauseMusic, playMusic, replayMusic, unpauseMusic } from "../../../redux/slices/music";
import { NoData } from "../../../atoms";
import { formatTimeFromSecond } from "../../../utils/helpers";
import BottomFloatPopup from "../../../components/BottomFloatMusicPopup/BottomFloatMusicPopup";


function AllMusic () {
    const dispatch = useAppDispatch();
    const musicState = useAppSelector(state => state.music)

    const [musicList, setMusicList] = useState<Array<Utils.Key<PropTypes.MusicListItemIterables>>>([])

    useEffect(() => {
        setMusicList(musicState.musics.map((music, mi) => ({
            key: `${mi}`,
            data: {
                id: music.id,
                img: MusicImage1,
                title: music.filename,
                duration: formatTimeFromSecond(music.duration)
            },
            selected: false
        })))
    }, [musicState.musics])

    const mediaPermission = useAppSelector(state => state.permission.media)

    const handleMusicClick = (id: string) => {
        handlePlay(id)
    }
    const handlePlay = (id: (string | undefined)) => {
        if (id) {
            dispatch(playMusic(id))
            setMusicList(musicList.map((ml) => ({
                ...ml,
                selected: ml.data.id === id ? true : false
            })))
        }
    }
    const handleUnpause = () => {
        dispatch(unpauseMusic())
    }
    const handleReplay = () => {
        dispatch(replayMusic())
    }
    const handlePause = () => {
        dispatch(pauseMusic())
    }
    
    return (
        mediaPermission.granted ? <Container>
            <Header />
            {musicState.musics.length != 0 ? <View style={style.listContainer}>
                {musicState.currentMusic && <MiniPlayer 
                    data={{
                        title: musicState.currentMusic.asset.filename,
                        duration: formatTimeFromSecond(musicState.currentMusic.asset.duration),
                        // currentPosition: formatTimeFromSecond(musicState.currentMusic.currentPositionInMillseconds),
                    }}
                    status={musicState.currentMusic.status}
                    onPause={handlePause}
                    onPlay={handleUnpause}
                    onReplay={handleReplay}
                />}
                <FlatList 
                    data={musicList}
                    renderItem={({ item }) => (
                        <MusicListItem 
                            data={item.data} 
                            selected={item.selected} 
                            onClick={handleMusicClick}
                        /> 
                    )}
                    keyExtractor={item => item.key}
                />
                {musicState.currentMusic && <BottomFloatPopup />}
            </View> 
            :  <View style={style.noDataContainer}>
                <NoData 
                    heading="No Music Found" 
                    description="There is no music in your storage. Start downloading musics to listen!"
                />
            </View>}
        </Container> : <PermissionError />
        // <PermissionError />
    )
}

const style = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginBottom: 35,
        padding: 22
    },
    noDataContainer: {
        height: '80%',
        width: '100%',
        // alignItems: 'center'
    }
})

export default AllMusic