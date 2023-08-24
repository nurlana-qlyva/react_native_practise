import { View, Text, StyleSheet } from "react-native";
import { useAuthentication } from "../hooks/useAuthentication";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "react-native-elements";

const auth = getAuth();

const Home = () => {
  const user = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>

      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
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
  button: {
    marginTop: 10,
  },
});

export default Home;
