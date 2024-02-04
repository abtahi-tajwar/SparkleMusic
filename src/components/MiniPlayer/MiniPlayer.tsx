import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from '@react-native-material/core'
import { MediaGoPreviousIcon, MediaGoNextIcon, MediaPauseIcon } from '../../../assets/Icons'
import Slider from '@react-native-community/slider'
import React from 'react'
import { useTheme } from '../Theme'

export function MiniPlayer() {
  const theme = useTheme()
  const styles = themedStyles(theme);
  return (
    <View>
      <View style={styles.playerInfo}>
        <View>
          <Text style={styles.title}>Girl Band</Text>
          <Text style={styles.timestamp}>02:30 / 05:10</Text>
        </View>
        <View style={styles.playerNavButtons}>
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

const themedStyles = (theme : Config.Theme) => {
  return StyleSheet.create({
    playerInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 16,
      fontWeight: '300',
      color: '#ffffff'
    },
    timestamp: {
      color: theme.colors?.primaryLight,
      fontSize: 12
    },
    playerNavButtons: {
      flexDirection: 'row'
    }
  })
}