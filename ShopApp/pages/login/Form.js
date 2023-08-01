import {
  View,
  TouchableWithoutFeedback,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import Input from "../../components/Input/Input";
import styles from "./Login.style";
import usePost from "../../hooks/usePost/usePost";
import { API_AUTH_URL } from "@env";
import { useSelector } from "react-redux";

const Form = ({ navigation }) => {
  const state = useSelector(state => state.auth)
  const { data, loading, error, post } = usePost();

  const handleLogin = (values) => {
    post(API_AUTH_URL + "/login", values);
  };

  if (error) {
    Alert.alert("Shop", "There is error");
  }

  if (data) {
    if (data.status === "Error") {
      Alert.alert("Shop", "User is not found");
    } else {
      navigation.navigate("ProductsScreen");
    }
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleLogin}
    >
      {({ handleSubmit, handleChange, values }) => {
        return (
          <View style={styles.form_container}>
            <Input
              placeholder="Username"
              placeholderTextColor="#fff"
              onChange={handleChange("username")}
              value={values.username}
              icon="account"
            />
            <Input
              placeholder="Password"
              placeholderTextColor="#fff"
              onChange={handleChange("password")}
              value={values.password}
              icon="key"
            />
            <TouchableWithoutFeedback onPress={handleSubmit}>
              {loading ? (
                <ActivityIndicator color="white" style={styles.button} />
              ) : (
                <Text style={styles.button}>Login</Text>
              )}
            </TouchableWithoutFeedback>
          </View>
        );
      }}
    </Formik>
  );
};

export default Form;
