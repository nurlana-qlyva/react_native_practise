import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1 },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "30%",
    justifyContent: "space-between",
    gap: 10
  },
  input: {
    borderColor: "#f81",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginTop: 40
  },
  close_btn: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#f77"
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
