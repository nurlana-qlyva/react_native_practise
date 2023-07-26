import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    //height: (Dimensions.get('window').height) / 2,
    padding: 10,
    borderRadius: 10,
    margin: 5,
    flex: 1
  },
  image: {
    flex: 2,
    height: (Dimensions.get('window').height) / 3,
    width: '100%',
    objectFit: 'contain',
    borderRadius: 10,
  },
  product_body: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10
  }
});
