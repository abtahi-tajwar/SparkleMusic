import { View, Text, StyleSheet, ViewStyle } from "react-native";
import React from "react";

type FlexProps = {
  children: React.ReactNode,
  style?: ViewStyle
}

export function Flex({ children, style, ...props }: FlexProps) {
  return <View style={[styles.flex, style]} {...props}>{children}</View>;
}
export function FlexCenter({ children, style, ...props }: FlexProps) {
  return <View style={[styles.flexCenter, style]} {...props}>{children}</View>;
}
export function FlexJustifyCenter({ children, style, ...props }: FlexProps) {
  return <View style={[styles.flexJustifyCenter, style]} {...props}>{children}</View>;
}

export function FlexAlignCenter({ children, style, ...props }: FlexProps) {
  return <View style={[styles.flexAlignCenter, style]} {...props}>{children}</View>;
}
export function FlexSpaceBetween({ children, style, ...props }: FlexProps) {
  return <View style={[styles.flexSpaceBetweeen, style]} {...props}>{children}</View>;
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
  },
  flexCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  flexJustifyCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  flexAlignCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexSpaceBetweeen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
