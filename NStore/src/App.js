import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import products_data from './products_data.json';
import ProductsCard from './components/ProductsCard';

const App = () => {
  const renderProducts = ({item}) => <ProductsCard product={item} />;

  return (
    <View style={StyleSheet.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>NSTORE</Text>
        <TextInput placeholder="Search..." style={styles.search_input} />
        <View style={styles.products_list}>
          <FlatList data={products_data} renderItem={renderProducts} showsVerticalScrollIndicator={false} numColumns={2} columnWrapperStyle={"row"}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: '600',
    color: '#e00',
    marginBottom: 20,
  },
  search_input: {
    backgroundColor: '#ddd',
    borderRadius: 14,
    paddingLeft: 20,
  },
  products_list: {
    paddingTop: 20,
    paddingBottom: 20,
  }
});

export default App;
