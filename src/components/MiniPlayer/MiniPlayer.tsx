import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from '@react-native-material/core'
import { MediaGoPreviousIcon, MediaGoNextIcon, MediaPauseIcon } from '../../../assets/Icons'
import Slider from '@react-native-community/slider'
import React from 'react'
import { useTheme } from '@react-native-material/core'

export function MiniPlayer() {
  const theme = useTheme()

  return (
    <View>
      <View>
        <View>
          <Text>Girl Band</Text>
          <Text>02:30 / 05:10</Text>
        </View>
        <View>
          <IconButton icon={<MediaGoPreviousIcon />} />
          <IconButton icon={<MediaPauseIcon />} />
          <IconButton icon={<MediaGoNextIcon />} />
        </View>
      </View>
      <View>
        <Slider
          // style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})