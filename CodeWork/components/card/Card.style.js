import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flex: 1,
    gap: 6
  },
  job: {
    fontSize: 18,
    fontWeight: "600",
  },
  company: {
    fontSize: 16,
    fontWeight: "400",
  },
  location_container: {
    backgroundColor: "#c11",
    borderRadius: 20,
    flex: 1,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 4
  },
  location: {
    fontSize: 16,
    color: "#fff",
  },
  level: {
    textAlign: "right",
    color: "#c11",
    fontSize: 16,
    fontWeight: "500"
  }
});
