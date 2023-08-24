import { Button } from "react-native";
import styles from "./Button.style";

const ButtonComp = ({ title, theme, onPress }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      style={styles.button}
      color={theme}
    />
  );
};

export default ButtonComp;
