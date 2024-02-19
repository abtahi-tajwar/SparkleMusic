import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider'
import { useTheme } from '../Theme'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { startMusicFromPosition } from '../../redux/slices/music'

export const CurrentMusicSeeker = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const musicState = useAppSelector(state => state.music)
    const currentMusic = musicState.currentMusic
    const currentMusicPosition = musicState.currentPositionInMillseconds

    // duration in milliseconds
    const [duration, setDuration] = useState<number>(1)

    useEffect(() => {
        if (currentMusic) {
            setDuration(currentMusic.asset.duration * 1000); 
        }
    }, [currentMusic])

    const handleValueChange = (value: number) => {
        dispatch(startMusicFromPosition(value));
    }   
  return (
    <View>
        {currentMusic && <Slider 
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor={theme.colors?.primary}
          thumbTintColor={theme.colors?.primary}
          maximumTrackTintColor="#ffffff"
          value={currentMusicPosition}
          onValueChange={handleValueChange}
          style={{ marginLeft: -10, marginRight: -10 }}
        />}
    </View>
  )
}
