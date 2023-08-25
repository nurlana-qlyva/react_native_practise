import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    borderColor: "#f81",
    borderWidth: 1,
    width: windowWidth / 2 - 22,
    height: windowHeight / 3 - 38,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#f81",
    fontSize: 16
  }
});
