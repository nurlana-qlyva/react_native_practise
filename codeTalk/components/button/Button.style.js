import { StyleSheet } from "react-native";

const button = {
  container: {
    paddingVertical: 10,
    borderColor: "#fa1",
    borderRadius: 6,
    marginBottom: 10
  },
  title: {
    textAlign: "center",
    fontSize: 18
  },
};

export default StyleSheet.create({
  ...button,
  primary: {
    container: {
      ...button.container,
      backgroundColor: "#fa1",
      marginTop: 10
    },
    title: {
      ...button.title,
      color: "#fff",
    },
  },
  secondary: {
    container: {
        ...button.container,
        backgroundColor: "#fff",
      },
      title: {
        ...button.title,
        color: "#fa1",
      },
  },
});
