import { FlatList, Text, View } from "react-native";
import styles from "./Jobs.style";
import useFetch from "../../hooks/useFetch";
import { API_JOBS_URL } from "@env";
import Card from "../../components/card";

const Jobs = ({ navigation }) => {
  const { data, loading, error } = useFetch(API_JOBS_URL);

  const goToDetail = (id) => {
    const findData = data?.results.find((item) => item.id === id);
    navigation.navigate("DetailScreen", {job: findData})
  };

  const renderItem = ({ item }) => {
    return <Card data={item} onPress={() => goToDetail(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderItem} />
    </View>
  );
};

export default Jobs;
