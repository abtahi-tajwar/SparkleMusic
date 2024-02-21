import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { IconButton } from '@react-native-material/core'
import { unpauseMusic, replayMusic, pauseMusic } from '../../redux/slices/music'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { MediaPauseIcon, MediaPlayIcon, MediaReplayIcon, MediaGoPreviousIcon, MediaGoNextIcon } from '../../../assets/Icons'
import { useTheme } from '../Theme'
import { ViewStyle } from 'react-native'

export function CurrentMusicActionButtons({ style } : { style?: ViewStyle}) {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const currentMusic = useAppSelector(state => state.music.currentMusic)

    const onPlay = () => {
        dispatch(unpauseMusic())
    }
    const onReplay = () => {
        dispatch(replayMusic())
    }
    const onPause = () => {
        dispatch(pauseMusic())
    }
  return (
    currentMusic && <View style={style}>
        <IconButton icon={<MediaGoPreviousIcon />} />
        {(currentMusic.status === "playing") && <IconButton onPress={() => onPause()} icon={<MediaPauseIcon color={theme.colors?.primary} />}></IconButton>}
          {(currentMusic.status === "paused") && <IconButton onPress={() => onPlay()} icon={<MediaPlayIcon color={theme.colors?.primary} />}></IconButton>}
          {(currentMusic.status === "finished") && <IconButton onPress={() => onReplay()} icon={<MediaReplayIcon color={theme.colors?.primary} />}></IconButton>}
        <IconButton icon={<MediaGoNextIcon />} />
    </View>
  )
}