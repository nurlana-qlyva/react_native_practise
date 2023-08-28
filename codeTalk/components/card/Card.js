import { Text, Pressable } from "react-native";
import styles from "./Card.style";

const Card = ({ data, onpress }) => {
  return (
    <Pressable style={styles.container} onPress={onpress}>
      <Text style={styles.title}>{data}</Text>
    </Pressable>
  );
};

export default Card;
