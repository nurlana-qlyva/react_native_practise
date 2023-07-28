import LottieView from "lottie-react-native";
import loading from "../../assets/loading.json";

const Loading = () => {
  return <LottieView source={loading} autoPlay loop />;
};

export default Loading;
