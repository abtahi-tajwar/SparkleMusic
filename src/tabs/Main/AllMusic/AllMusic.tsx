import React, { Component } from "react"
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
import { useAppSelector } from "../../../redux/hooks";


function AllMusic () {

    const mediaPermission = useAppSelector(state => state.permission.media)
    console.log("Media permission", mediaPermission)
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
            <View style={style.listContainer}>
                <MiniPlayer />
                <FlatList 
                    data={flatListProp}
                    renderItem={({ item }) => <MusicListItem data={item.data} selected={item.selected} /> }
                    keyExtractor={item => item.id}
                />
            </View>
        </Container> : <PermissionError />
        // <PermissionError />
    )
}

const style = StyleSheet.create({
    listContainer: {
        padding: 22
    }
})

export default AllMusic