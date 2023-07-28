import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: deviceSize.width,
    height: deviceSize.height,
  },
  image: {
    width: deviceSize.width - 40,
    height: deviceSize.height / 3,
    backgroundColor: "#fff",
    resizeMode: "contain",
    marginBottom: 10
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: '500'
  },
  price: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: '400',
    color: "#800"
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: '400',
    color: "#444"
  }
});
