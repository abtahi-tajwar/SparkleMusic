import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bannerImg: {
    width: 345,
  },

  bannerImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  title: {
    color: "white",
    fontSize: 23,
    marginLeft: 30,
  },

  controller: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },

  duration: {
    color: "white",
  },

  actionBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 200,
  },

  actionBtnContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
