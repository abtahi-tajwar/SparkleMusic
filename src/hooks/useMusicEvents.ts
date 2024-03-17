import { AVPlaybackStatus } from "expo-av";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { moveToMusic, updateCurrentMusicPosition, updateCurrentMusicStatus } from "../redux/slices/music";

export const useMusicEvents = () => {
    const [autoPlay, setAutoPlay] = useState(true);
    const dispatch = useAppDispatch();
    const musicState = useAppSelector(state => state.music)

    useEffect(() => {
        if (musicState.currentMusic) {
            musicState.currentMusic.playbackObject.setOnPlaybackStatusUpdate(_playbackStatusUpdate)
        }
    }, [musicState.currentMusic])

    const _playbackStatusUpdate = (playbackStatus : AVPlaybackStatus) => {
        if (!playbackStatus.isLoaded) {
            // Update your UI for the unloaded state
            if (playbackStatus.error) {
              console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
              // Send Expo team the error on Slack or the forums so we can help you debug!
            }
          } else {
            // Update your UI for the loaded state
        
            // if (playbackStatus.isPlaying) {
            //   // Update your UI for the playing state
            //   console.log("Is Playing")
            // } else {
            //   // Update your UI for the paused state
            //   console.log("Is not playing")
            // }
            
            // if (playbackStatus.isBuffering) {
            //   // Update your UI for the buffering state
            //   console.log("Is buffering")
            // }
            if (playbackStatus.isPlaying) {
              dispatch(updateCurrentMusicPosition(playbackStatus.positionMillis))
            }
            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
              // The player has just finished playing and will stop. Maybe you want to play something else?
                dispatch(updateCurrentMusicPosition(playbackStatus.positionMillis))
                dispatch(updateCurrentMusicStatus("finished"))
                if (autoPlay) dispatch(moveToMusic({ direction: "next", autoPlay: true }))
            }
          }
    }
}