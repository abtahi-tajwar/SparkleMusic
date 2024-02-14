import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from '@react-native-material/core'
import { MediaGoPreviousIcon, MediaGoNextIcon, MediaPauseIcon, MediaPlayIcon } from '../../../assets/Icons'
import Slider from '@react-native-community/slider'
import React, { useState } from 'react'
import { useTheme } from '../Theme'
import CustomText from '../../atoms/Typography/CustomText'

export function MiniPlayer() {
  const theme = useTheme()
  const styles = themedStyles(theme);
  const [paused, setPaused] = useState(true);
  const handleTogglePause = () => {
    setPaused(prev => !prev)
  }

  return (
    <View>
      <View style={styles.playerInfo}>
        <View>
          <CustomText style={styles.title}>Girl Band</CustomText>
          <CustomText style={styles.timestamp}>02:30 / 05:10</CustomText>
        </View>
        <View style={styles.playerNavButtons}>
          <IconButton icon={<MediaGoPreviousIcon />} />
          <IconButton 
            icon={ paused ? <MediaPauseIcon color={theme.colors?.primary} /> : <MediaPlayIcon color={theme.colors?.primary} /> } 
            onPress={handleTogglePause}
          />
          <IconButton icon={<MediaGoNextIcon />} />
        </View>
      </View>
      <View>
        <Slider
          // style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme.colors?.primary}
          thumbTintColor={theme.colors?.primary}
          maximumTrackTintColor="#ffffff"
          style={{ marginLeft: -10, marginRight: -10 }}
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