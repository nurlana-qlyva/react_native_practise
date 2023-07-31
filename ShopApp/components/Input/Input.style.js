import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.4)",
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
  input: {
    flex: 5,
    color: "#fff"
  },
  icon: {
    flex: .5,
    fontSize: 24,
    color: "rgba(255,255,255,.7)"
  }
});
