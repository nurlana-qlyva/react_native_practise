import { Button, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setRemovingJob } from "../../store/slices/favourite_Jobs_slice/FavouriteJobsSlice";
import Card from "../../components/card";
import styles from "./FavouriteJobs.style";

const FavouriteJobs = () => {
  const favouriteJobs = useSelector((state) => state.favourites.data);
  const dispatch = useDispatch()
 
  const handleRemoveData = (id) => {
    dispatch(setRemovingJob(id))
  }
  console.log(favouriteJobs)
  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteJobs}
        renderItem={({ item }) => (
          <View style={styles.card_container} key={item.id}>
            <Card data={item} />
            <Button title="Remove" color={"#c11"} onPress={() => handleRemoveData(item.id)}/>
          </View>
        )}
      />
    </View>
  );
};

export default FavouriteJobs;
