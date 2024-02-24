import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import {
  MediaGoPreviousIcon,
  MediaGoNextIcon,
  MediaPauseIcon,
  MediaPlayIcon,
  MediaReplayIcon,
} from "../../../assets/Icons";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { useTheme } from "../Theme";
import CustomText from "../../atoms/Typography/CustomText";
import { CurrentMusicSeeker } from "../CurrentMusicSeeker";
import { CurrentMusicDuration } from "../CurrentMusicDuration";
import { CurrentMusicActionButtons } from "../CurrentMusicActionButtons/CurrentMusicActionButtons";
import { renderExceprt } from "../../utils/helpers";

export function MiniPlayer({
  data,
  status,
  onPause,
  onPlay,
  onReplay,
}: PropTypes.MiniPlayer) {
  const theme = useTheme();
  const styles = themedStyles(theme);
  // const [paused, setPaused] = useState(true);

  return (
    <View>
      <View style={styles.playerInfo}>
        <View>
          <CustomText style={styles.title}>{renderExceprt(data.title, 20) }</CustomText>
          {/* <CustomText style={styles.timestamp}>{data.currentPosition} / {data.duration}</CustomText> */}
          <CurrentMusicDuration style={styles.timestamp} />
        </View>
        {/* <View style={styles.playerNavButtons}>
          <IconButton icon={<MediaGoPreviousIcon />} />
          {(status === "playing") && <IconButton onPress={() => onPause()} icon={<MediaPauseIcon color={theme.colors?.primary} />}></IconButton>}
          {(status === "paused") && <IconButton onPress={() => onPlay()} icon={<MediaPlayIcon color={theme.colors?.primary} />}></IconButton>}
          {(status === "finished") && <IconButton onPress={() => onReplay()} icon={<MediaReplayIcon color={theme.colors?.primary} />}></IconButton>}
          <IconButton icon={<MediaGoNextIcon />} />
        </View> */}
        <CurrentMusicActionButtons
          style={styles.playerNavButtons}
          varient="mini"
        />
      </View>
      <View>
        <CurrentMusicSeeker />
      </View>
    </View>
  );
}

const themedStyles = (theme: Config.Theme) => {
  return StyleSheet.create({
    playerInfo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 16,
      fontWeight: "300",
      color: "#ffffff",
    },
    timestamp: {
      color: theme.colors?.primaryLight,
      fontSize: 12,
    },
    playerNavButtons: {
      flexDirection: "row",
    },
  });
};
