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
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/auth/authSlice";

const Form = ({ navigation }) => {
  const { data, loading, error, post } = usePost();
  const dispatch = useDispatch()

  const handleLogin = (values) => {
    dispatch(setUser(data))
    post(API_AUTH_URL + "/login", values);
  };

  if (error) {
    Alert.alert("Shop", "User is not found");
  }

  if (data) {
    navigation.navigate("ProductsScreen");
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
