import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { IconButton } from "@react-native-material/core";
import {
  unpauseMusic,
  replayMusic,
  pauseMusic,
} from "../../redux/slices/music";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  MediaPauseIcon,
  MediaPlayIcon,
  MediaReplayIcon,
  MediaGoPreviousIcon,
  MediaGoNextIcon,
  MediaPlayIconLarge,
  MediaGoNextIconLarge,
  MediaGoPreviousIconLarge,
  MediaPauseIconLarge,
  MediaReplayIconLarge,
} from "../../../assets/Icons";
import { useTheme } from "../Theme";
import { ViewStyle } from "react-native";

export function CurrentMusicActionButtons({
  style,
  varient,
}: {
  style?: ViewStyle;
  varient: "mini" | "full";
}) {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const currentMusic = useAppSelector((state) => state.music.currentMusic);

  const onPlay = () => {
    dispatch(unpauseMusic());
  };
  const onReplay = () => {
    dispatch(replayMusic());
  };
  const onPause = () => {
    dispatch(pauseMusic());
  };
  return (
    currentMusic && (
      <View style={style}>
        <IconButton
          icon={
            varient === "mini" ? (
              <MediaGoPreviousIcon color={'white'} />
            ) : (
              <MediaGoPreviousIconLarge color={'white'} />
            )
          }
        />
        {currentMusic.status === "playing" && (
          <IconButton
            onPress={() => onPause()}
            icon={
              varient === "mini" ? (
                <MediaPauseIcon color={theme.colors?.primary} />
              ) : (
                <MediaPauseIconLarge color={theme.colors?.primary} />
              )
            }
          ></IconButton>
        )}
        {currentMusic.status === "paused" && (
          <IconButton
            onPress={() => onPlay()}
            icon={
              varient === "mini" ? (
                <MediaPlayIcon color={theme.colors?.primary} />
              ) : (
                <MediaPlayIconLarge color={theme.colors?.primary} />
              )
            }
          ></IconButton>
        )}
        {currentMusic.status === "finished" && (
          <IconButton
            onPress={() => onReplay()}
            icon={
              varient === "mini" ? (
                <MediaReplayIcon color={theme.colors.primary} />
              ) : (
                <MediaReplayIconLarge color={theme.colors.primary} />
              )
            }
          ></IconButton>
        )}
        <IconButton
          icon={
            varient === "mini" ? <MediaGoNextIcon color={'white'} /> : <MediaGoNextIconLarge color={'white'}  />
          }
        />
      </View>
    )
  );
}
