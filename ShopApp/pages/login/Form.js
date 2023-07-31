import { View, TouchableWithoutFeedback, Text, Alert } from "react-native";
import { Formik } from "formik";
import Input from "../../components/Input/Input";
import styles from "./Login.style";
import usePost from "../../hooks/usePost/usePost";
import { API_AUTH_API } from "@env";

const Form = () => {
  const { data, loading, error, post } = usePost();

  const handleSubmit = (values) => {
    post(API_AUTH_API + '/login', values);
  };

  if (error) {
    Alert.alert("Shop", "User is not found");
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
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
              <Text style={styles.button} loading={loading}>
                Login
              </Text>
            </TouchableWithoutFeedback>
          </View>
        );
      }}
    </Formik>
  );
};

export default Form;
