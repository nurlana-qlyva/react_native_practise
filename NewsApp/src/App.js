import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import data from './news_data.json';
import banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  const renderNews = ({item}) => <NewsCard data={item} />;

  return (
    <View style={styles.container}>
        <Text style={styles.header}>News App</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {banner_data.map(item => (
                <Image
                keyExtractor={item => item.id.toString()}
                  source={{uri: item.imageUrl}}
                  height={Dimensions.get('window').height / 5}
                  width={Dimensions.get('window').height / 2}
                />
              ))}
            </ScrollView>
          )}
          data={data}
          keyExtractor={item => item.u_id.toString()}
          renderItem={renderNews}
          style={styles.list}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  header: {
    fontSize: 36,
    fontWeight: '600',
    color: '#483d8b',
    padding: 10,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
   },
});

export default App;
