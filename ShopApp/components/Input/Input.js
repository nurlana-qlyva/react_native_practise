import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Input.style";

const Input = ({ placeholder, placeholderTextColor, onChange, value, icon }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChange}
        value={value}
        name={value}
      />
      <Icon name={icon} style={styles.icon}/>
    </View>
  );
};

export default Input;
