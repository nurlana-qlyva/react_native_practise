import { Dimensions, StyleSheet } from "react-native";

const Width = Dimensions.get("window").width

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  name: {
    color: "#332",
    fontSize: 20,
    marginBottom: 10,
  },
  flex_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  static: {
    color: "#f11",
    fontWeight: "500",
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    fontWeight: "500"
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 24,
    fontWeight: "600"
  },
  content: {
    backgroundColor: "#fff",
    padding: 10
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 20
  },
  button: {
    backgroundColor: "#f11",
    color: "#fff",
    width: Width / 2 - 25,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10
  }
});
