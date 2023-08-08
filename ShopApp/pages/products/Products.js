import { View, Text, FlatList, ActivityIndicator, Button } from "react-native";
import styles from "./Products.style";
import { API_PRODUCT_URL } from "@env";
import ProductCard from "../../components/ProductCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth/authSlice";

const Products = ({ navigation }) => {
  const { loading, error, data } = useFetch(API_PRODUCT_URL);

  const hadnleProductSelection = (id) => {
    const findProduct = data.find((item) => item.id === id);
    navigation.navigate("DetailScreen", { product: findProduct });
  };

  const renderItem = ({ item }) => {
    return (
      <ProductCard
        data={item}
        onSelect={() => hadnleProductSelection(item.id)}
      />
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} style={styles.list}/>
    </View>
  );
};

export default Products;
