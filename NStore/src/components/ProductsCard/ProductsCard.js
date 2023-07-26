import {Text, View, Image} from 'react-native';
import styles from './ProductsCard.style';

const ProductsCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={{uri: product.imgURL}} style={styles.image} />
      </View>
      <View style={styles.product_body}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && <Text style={styles.stock}>out of stock</Text>}
      </View>
    </View>
  );
};

export default ProductsCard;
