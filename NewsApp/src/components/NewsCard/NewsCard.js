import {View, Text, Image, Dimensions} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({data}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.imageUrl}} height={Dimensions.get('window').height / 4}/>
        <View style={styles.body_container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.text}>{data.description}</Text>
            <Text style={styles.author}>By {data.author}</Text>
        </View>
    </View>
  ) 
}

export default NewsCard;
