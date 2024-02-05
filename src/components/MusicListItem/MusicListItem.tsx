import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { IconButton } from "@react-native-material/core";
import { MediaPauseIcon, MediaPlayIcon, OptionsIconHorizontal } from "../../../assets/Icons";
import { useTheme } from "../Theme";
import Slider from "@react-native-community/slider";
import { Flex, FlexSpaceBetween } from "../../atoms";
import CustomText from "../../atoms/Typography/CustomText";

export function MusicListItem({ data, selected }: PropTypes.MusicListItem) {
  const theme = useTheme();

  const handleClickItem = () => {
    console.log("Click detected");
  };
  const [paused, setPaused] = useState<boolean>(true);
  const togglePause = () => {
    setPaused(prev => !prev)
  }
  const style = createDefaultStyles(theme);
  const selectedStyle = createSelectedStyles(theme);
  return !selected ? (
    <TouchableHighlight onPress={handleClickItem}>
      <View style={style.container}>
        <Image source={data.img} />
        <View>
          <CustomText variant="300" style={style.title}>{data.title}</CustomText>
          <CustomText variant="300" style={style.duration}>{data.duration}</CustomText>
        </View>
        <IconButton style={style.iconButton} icon={(props) => <OptionsIconHorizontal />} />
      </View>
    </TouchableHighlight>
  ) : (
    <Flex style={selectedStyle.container}>
      <View style={selectedStyle.imageContainer}>
        <Image source={data.img} style={selectedStyle.image} />
      </View>
      <View style={selectedStyle.content}>
        <FlexSpaceBetween>
          <View>
            <CustomText variant="300" style={{ color: 'white' }}>{data.title}</CustomText>
            <CustomText variant="300" style={{ color: theme.colors?.primaryLight }}>{data.duration}</CustomText>
          </View>
          <View>
            <IconButton icon={
              paused 
                ? <MediaPauseIcon color={theme.colors?.primary} />
                : <MediaPlayIcon color={theme.colors?.primary} />
              } 
              onPress={togglePause}
            />
          </View>
        </FlexSpaceBetween>
        <Slider 
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme.colors?.primary}
          thumbTintColor={theme.colors?.primary}
          maximumTrackTintColor="#ffffff"
          style={{ marginLeft: -10, marginRight: -10 }}
        />
      </View>
    </Flex>
  );
}
const createDefaultStyles = (theme: Config.Theme) => {
  return StyleSheet.create({
    container: {
      gap: 8,
      flexDirection: "row",
      alignItems: "center",
      borderRightColor: theme.colors?.primary,
      borderRightWidth: 2,
      marginTop: 5,
    },
    image: {
      height: 40,
      width: 40,
    },
    title: {
      fontSize: 14,
      fontWeight: "300",
      color: "white",
    },
    duration: {
      color: "#E0A8A8",
      fontWeight: "300",
      fontSize: 10,
    },
    iconButton: {
      marginLeft: "auto",
    },
  });
};

const createSelectedStyles = (theme: Config.Theme) => {
  return StyleSheet.create({
    container: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: theme.colors?.backgroundPrimary
    },
    imageContainer: {
      height: 85
    },
    image: {
      height: '100%',
      aspectRatio: '1/1',
      objectFit: 'cover'
    },
    content: {
      flex: 1,
      paddingHorizontal: 13,
      paddingVertical: 8
    }
  });
};
// const style = StyleSheet.create({
//   container: {
//     gap: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRightColor: '#C4302B',
//     borderRightWidth: 2,
//     marginTop: 5,
//   },
//   image: {
//     height: 40,
//     width: 40
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: "300",
//     color: 'white'
//   },
//   duration: {
//     color: '#E0A8A8',
//     fontWeight: "300",
//     fontSize: 10
//   },
//   iconButton: {
//     marginLeft: 'auto'
//   }
// })
