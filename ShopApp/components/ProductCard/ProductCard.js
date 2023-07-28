import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ data, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>${data.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
