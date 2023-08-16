import LottieView from "lottie-react-native";
import loading from "../../assets/animations/loading.json";

const Loading = () => {
  console.log('yes')
  return (
    <LottieView
      source={loading}
      autoPlay
      loop
    />
  );
};

export default Loading;
