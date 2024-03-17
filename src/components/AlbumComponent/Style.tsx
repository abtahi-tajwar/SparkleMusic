import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  bannerImg: {
    width: 67,
    height: 67,
  },

  title: {
    fontSize: 14,
    color: "white",
    marginLeft: 8,
  },
});
