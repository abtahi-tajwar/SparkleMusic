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
import { getMusicsFromDevice } from "../../../redux/slices/music";
import { NoData } from "../../../atoms";


function AllMusic () {
    const dispatch = useAppDispatch();
    const musicState = useAppSelector(state => state.music)

    const [musicList, setMusicList] = useState<Array<Utils.Id<PropTypes.MusicListItem>>>([])

    useEffect(() => {
        setMusicList(musicState.musics.map((music, mi) => ({
            id: `${mi}`,
            data: {
                img: MusicImage1,
                title: music.filename,
                duration: `${music.duration}`
            },
            selected: false
        })))
    }, [])
    const mediaPermission = useAppSelector(state => state.permission.media)
    const musicData : Array<PropData.MusicListItem> = [
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        
    ]

    const flatListProp : Array<Utils.Id<PropTypes.MusicListItem>> = musicData.map((mData, mdi) => ({
        id: `${mdi}`,
        data: mData,
        selected: mdi === 2 ? true : false
    }))
    return (
        mediaPermission.granted ? <Container>
            <Header />
            {musicState.musics.length != 0 ? <View style={style.listContainer}>
                <MiniPlayer />
                <FlatList 
                    data={musicList}
                    renderItem={({ item }) => <MusicListItem data={item.data} selected={item.selected} /> }
                    keyExtractor={item => item.id}
                />
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
        padding: 22
    },
    noDataContainer: {
        height: '80%',
        width: '100%',
        // alignItems: 'center'
    }
})

export default AllMusic