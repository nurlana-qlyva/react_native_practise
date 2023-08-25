import { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setRoomData } from "../../features/chatRoomsSlice";

const Room = ({ route }) => {
  const { data } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoomData(data));
  }, []);

  return (
    <View>
      <Text>room</Text>
    </View>
  );
};

export default Room;
