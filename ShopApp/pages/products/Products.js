import { View, Text, FlatList } from "react-native";
import { API_URL } from "@env";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const renderItem = ({ item }) => {
    return <ProductCard data={item} />;
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const d = {
  category: "women's clothing",
  description:
    "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  id: 20,
  image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  price: 12.99,
  rating: { count: 145, rate: 3.6 },
  title: "DANVOUY Womens T Shirt Casual Cotton Short",
};

export default Products;
