import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: 100,
    height: 150,
    backgroundColor: "#fff",
    // objectFit: "contain",
    resizeMode: 'contain',

  },
  body_container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10
  },
  price: {
    fontSize: 16,
    color: '#f07',
    fontWeight: '500',
  }
});
