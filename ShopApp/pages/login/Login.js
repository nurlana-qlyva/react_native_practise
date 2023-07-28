import { View, Text, TextInput, Button } from "react-native";
import styles from "./Login.style";
import { StatusBar } from "expo-status-bar";
import login from '../../assets/signup.json'
import AnimatedLottieView from "lottie-react-native";

const Login = () => {
  return (
    <View>
      <AnimatedLottieView source={login} autoPlay loop/>
      <TextInput placeholder="username"/>
      <TextInput placeholder="password"/>
      <Button title="Login"/>
      <StatusBar hidden/>
    </View>
  );
};

export default Login;