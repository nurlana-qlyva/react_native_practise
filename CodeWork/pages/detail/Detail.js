import { Button, ScrollView, Text, View } from "react-native";
import HTMLView from "react-native-htmlview";
import styles from "./Detail.style";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteJob } from "../../store/slices/favourite_Jobs_slice/FavouriteJobsSlice";

const Detail = ({ route }) => {
  const { job } = route.params;

  const dispatch = useDispatch();

  const addFavoriteJobsList = () => {
    console.log('yes')
    dispatch(setFavoriteJob(job));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.name}>{job.name}</Text>
        <View style={styles.flex_container}>
          <Text style={styles.static}>Company:</Text>
          <Text style={styles.value}>{job.company.name}</Text>
        </View>
        <View style={styles.flex_container}>
          <Text style={styles.static}>Job Level:</Text>
          <Text style={styles.value}>{job.levels[0].name}</Text>
        </View>
        <Text style={styles.title}>Job Detail</Text>
        <HTMLView value={job.contents} style={styles.content} />
        <View style={styles.buttons}>
          <TouchableWithoutFeedback onPress={addFavoriteJobsList}>
            <Text style={styles.button}>Submit</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={styles.button}>Favorite Job</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
