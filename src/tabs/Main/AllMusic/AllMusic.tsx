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

import { Header, MusicListItem, MiniPlayer } from "../../../components"


function AllMusic () {
    const flatListData : Array<Utils.Id<PropData.MusicListItem>> = [
        { id: "1", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "2", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "3", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "4", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "5", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "6", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "7", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "8", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "9", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "10", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "11", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "12", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "13", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "14", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "15", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "16", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "17", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "18", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "19", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "20", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "21", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "22", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "23", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "24", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "25", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "26", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "27", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "28", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "29", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "30", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "31", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "32", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "33", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "34", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "35", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
        { id: "36", img: MusicImage1, title: "Pain - Ryan Jones", duration: "04:41" },
    ]
    return (
        <Container>
            <Header />
            <View style={style.listContainer}>
                <MiniPlayer />
                <FlatList 
                    data={flatListData}
                    renderItem={({ item }) => <MusicListItem data={item}/> }
                    keyExtractor={item => item.id}
                />
            </View>
        </Container>
    )
}

const style = StyleSheet.create({
    listContainer: {
        padding: 22
    }
})

export default AllMusic