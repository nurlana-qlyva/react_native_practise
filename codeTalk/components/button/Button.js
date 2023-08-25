import { Pressable, Text } from "react-native";
import styles from "./Button.style";

const ButtonComponent = ({title, styleTitle, onPress}) => {
  return <Pressable style={styles[styleTitle]?.container} onPress={onPress}>
    <Text style={styles[styleTitle]?.title}>{title}</Text>
  </Pressable>;
};

export default ButtonComponent;
