import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import Input from "../../components/input";
import ButtonComponent from "../../components/button";
import styles from "./Signup.style";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Signup = ({ navigation }) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    repassword: "",
    error: "",
  });

  const signup = async () => {
    if (value.email === "" || value.password === "") {
      setValue({ ...value, error: "Please, input value into fields" });
      return;
    } else if (value.password !== value.repassword) {
      setValue({ ...value, error: "Please, input value into fields" });
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password,
        value.repassword
      );
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
        <Input
          placeholder="Confirm Password"
          value={value.repassword}
          onchange={(text) => setValue({ ...value, repassword: text })}
        />
        <ButtonComponent
          title="Sign Up"
          styleTitle={"primary"}
          onPress={signup}
        />
        <ButtonComponent
          title="Go Back"
          styleTitle={"secondary"}
          onPress={() => navigation.navigate("Signin")}
        />
      </View>
    </View>
  );
};

export default Signup;
