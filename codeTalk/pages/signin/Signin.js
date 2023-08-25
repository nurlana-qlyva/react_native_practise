import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import Input from "../../components/input";
import ButtonComponent from "../../components/button";
import styles from "./Signin.style";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Signin = ({ navigation }) => {
  const [value, setValue] = useState({ email: "", password: "", error: "" });

  const signin = async () => {
    if (value.email === "" || value.password === "") {
      setValue({ ...value, error: "Please, input value into fields" });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />

      {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.title_container}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <View style={styles.input_container}>
        <Input
          placeholder="Email Address"
          value={value.email}
          onchange={(text) => setValue({ ...value, email: text })}
        />
        <Input
          placeholder="Password"
          value={value.password}
          onchange={(text) => setValue({ ...value, password: text })}
        />
        <ButtonComponent
          title="Sign In"
          styleTitle={"primary"}
          onPress={signin}
        />
        <ButtonComponent
          title="Sign Up"
          styleTitle={"secondary"}
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
};

export default Signin;
