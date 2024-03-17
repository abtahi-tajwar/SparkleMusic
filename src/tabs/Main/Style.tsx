import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 22,
    marginRight: 22,
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  sortContainer: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  sortTitle: {
    color: "white",
    marginLeft: 10,
  },

  albumContainer: {
    marginTop: 0,
  },
});
