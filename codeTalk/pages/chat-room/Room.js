import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { setRoomData } from "../../features/chatRoomsSlice";
import Icon from "react-native-vector-icons/Feather";
import usePostMessage from "../../hooks/usePostMessage";
import useFetchMessages from "../../hooks/useFetchMessages";
import styles from "./Room.style";

const Room = ({ route }) => {
  const [message, setMessage] = useState("");
  const { data } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoomData(data.name));
  }, []);

  const { post } = usePostMessage(data.id, message);
  const messages = useFetchMessages(data.id);

  return (
    <View style={styles.container}>
      <ScrollView>
        {messages.map((message) => (
          <View style={styles.message_container}>
            <Text style={styles.user}>User</Text>
            <Text style={styles.message}>{message.message}</Text>
          </View>
        ))} 
      </ScrollView>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
        />
        <Pressable style={styles.button_container} onPress={post}>
          <Icon name="send" size={18} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

export default Room;
