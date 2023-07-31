import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import styles from "./Login.style";
import LottieView from "lottie-react-native";
import { Animated, Easing } from "react-native";
import { useRef, useEffect } from "react";
import Form from "./Form";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const Login = () => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleChange = () => {

  }

  return (
    <View style={styles.container}>
      <AnimatedLottieView
        source={require("../../assets/login.json")}
        progress={animationProgress.current}
        loop
        style={styles.animation}
      />
      <Form />
    </View>
  );
};

export default Login;
