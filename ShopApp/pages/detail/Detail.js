import { View, Text, Image } from "react-native";
import styles from "./Detail.style";

const Detail = ({ route }) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default Detail;
