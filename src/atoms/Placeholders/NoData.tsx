import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CustomText from "../Typography/CustomText";

const NoDataImg = require("../../../assets/no-data.png");

export const NoData = ({ heading, description } : PropTypes.NoData) => {
  return (
    <View style={style.container}>
      <Image source={NoDataImg} style={style.image} />
      <CustomText variant="700" style={{ fontSize: 22, color: 'white' }}>{heading ?? "No Data Found"}</CustomText>
      {description && <CustomText style={{ color: 'white', textAlign: 'center' }}>{description}</CustomText>}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: "100%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  image: {
    // width: '100%',
    height: 200,
    objectFit: 'contain'
  }
});
