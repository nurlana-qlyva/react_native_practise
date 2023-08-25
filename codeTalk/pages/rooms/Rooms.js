import { Pressable, ScrollView, View } from "react-native";
import styles from "./Rooms.style";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

import Card from "../../components/card";
import ModalComponent from "../../components/modal";

const rooms = [
  {
    id: 1,
    title: "vue",
  },
  {
    id: 2,
    title: "react",
  },
  {
    id: 3,
    title: "phyton",
  },
  {
    id: 4,
    title: "unity",
  },
  {
    id: 5,
    title: "net",
  },
  {
    id: 6,
    title: "flutter",
  },
  {
    id: 7,
    title: "swift",
  },
];

const Rooms = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.list}>
          {rooms.map((room) => (
            <Card
              data={room}
              onpress={() => navigation.navigate("Room", { data: room })}
            />
          ))}
        </View>
      </ScrollView>
      <Pressable style={styles.addBtn_container} onPress={showModal}>
        <Icon name="plus" size={40} color="#fff" />
      </Pressable>

      <ModalComponent isVisible={isVisible} onPress={() => setIsVisible(false)}/>
    </View>
  );
};

export default Rooms;
