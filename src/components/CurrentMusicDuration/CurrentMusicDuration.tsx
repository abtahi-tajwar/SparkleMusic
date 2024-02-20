import { Text } from 'react-native'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { formatTimeFromMillisecond } from '../../utils/helpers'
import CustomText from '../../atoms/Typography/CustomText'

export function CurrentMusicDuration({ ...props }) {
    const musicState = useAppSelector(state => state.music)
    const currentPosition = musicState.currentPositionInMillseconds
    const currentMusic = musicState.currentMusic
    
    const [duration, setDuration] = useState<number>(0)

    useEffect(() => {
        if (currentMusic) {
            setDuration(currentMusic.asset.duration * 1000)
        }
    }, [currentMusic])

  return (
    <CustomText {...props}>
        {formatTimeFromMillisecond(currentPosition)} / {formatTimeFromMillisecond(duration)}
    </CustomText>
  )
}
