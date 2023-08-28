import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  message_container: {
    backgroundColor: "#fff",
    marginVertical: 6,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 10,
  },
  user: {
    color: "#f71",
    fontSize: 18,
    fontWeight: "500",
  },
  input_container: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  input: {
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  button_container: {
    backgroundColor: "#f71",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
