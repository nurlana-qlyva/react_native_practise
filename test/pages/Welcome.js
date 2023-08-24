import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome screen!</Text>

      <View style={styles.buttons}>
        <Button
          title="Sign in"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Signin")}
        />
        <Button
          title="Sign up"
          type="outline"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
  },
  button: {
    marginTop: 10,
  },
});

export default Welcome;
