import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { IconButton } from "@react-native-material/core";
import { MediaPauseIcon, OptionsIconHorizontal } from "../../../assets/Icons";
import { useTheme } from "../Theme";
import Slider from "@react-native-community/slider";

export function MusicListItem({ data, selected }: PropTypes.MusicListItem) {
  const theme = useTheme();

  const handleClickItem = () => {
    console.log("Click detected");
  };
  const style = createStyles(theme);
  return !selected ? (
    <TouchableHighlight onPress={handleClickItem}>
      <View style={style.container}>
        <Image source={data.img} />
        <View>
          <Text style={style.title}>{data.title}</Text>
          <Text style={style.duration}>{data.duration}</Text>
        </View>
        <IconButton style={style.iconButton} icon={(props) => <OptionsIconHorizontal />} />
      </View>
    </TouchableHighlight>
  ) : (
    <View>
      <Image source={data.img} />
      <View>
        <View>
          <View>
            <Text>{data.title}</Text>
            <Text>{data.duration}</Text>
          </View>
          <View>
            <IconButton icon={<MediaPauseIcon />} />
          </View>
        </View>
        <Slider 
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>

    </View>
  );
}
const createStyles = (theme: Config.Theme) => {
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
