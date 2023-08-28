import { Pressable, ScrollView, View } from "react-native";
import styles from "./Rooms.style";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import useFetchAllRooms from "../../hooks/useFetchAllRooms";

import Card from "../../components/card";
import ModalComponent from "../../components/modal";

const Rooms = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const rooms = useFetchAllRooms();

  const showModal = () => setIsVisible(true);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.list}>
          {rooms?.map((room) => (
            <Card
              data={room.name}
              onpress={() => navigation.navigate("Room", { data: room })}
            />
          ))}
        </View>
      </ScrollView>
      <Pressable style={styles.addBtn_container} onPress={showModal}>
        <Icon name="plus" size={40} color="#fff" />
      </Pressable>

      <ModalComponent
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </View>
  );
};

export default Rooms;
