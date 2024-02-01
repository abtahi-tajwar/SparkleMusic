import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { IconButton } from '@react-native-material/core'
import { OptionsIconHorizontal } from '../../../assets/Icons'


export function MusicListItem({ data } : PropTypes.MusicListItem) {
  const handleClickItem = () => {
    console.log("Click detected")
  }
  return (
    <TouchableHighlight onPress={handleClickItem}>
      <View style={style.container}>
        <Image source={data.img} />
        <View>
          <Text style={style.title}>{data.title}</Text>
          <Text style={style.duration}>{data.duration}</Text>
        </View>
        <IconButton style={style.iconButton} icon={props => <OptionsIconHorizontal />} />
      </View>
    </TouchableHighlight>
  )
}

const style = StyleSheet.create({
  container: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRightColor: '#C4302B',
    borderRightWidth: 2,
    marginTop: 5,
  },
  image: {
    height: 40,
    width: 40
  },
  title: {
    fontSize: 14,
    fontWeight: "300",
    color: 'white'
  },
  duration: {
    color: '#E0A8A8',
    fontWeight: "300",
    fontSize: 10
  },
  iconButton: {
    marginLeft: 'auto'
  }
})