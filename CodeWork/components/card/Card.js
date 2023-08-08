import { FlatList, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./Card.style";

const Card = ({ data, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.job}>{data.name}</Text>
        <Text style={styles.company}>{data.company.name}</Text>
        <FlatList
          data={data.locations}
          renderItem={({ item }) => (
            <View style={styles.location_container}>
              <Text style={styles.location}>{item.name}</Text>
            </View>
          )}
        />
        <FlatList
          data={data.levels}
          renderItem={({ item }) => (
            <Text style={styles.level}>{item.name}</Text>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
