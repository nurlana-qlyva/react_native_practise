import { TextInput, View } from "react-native";
import styles from "./Input.style";

const Input = ({placeholder, onchange, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onchange}
      />
    </View>
  );
};

export default Input;
