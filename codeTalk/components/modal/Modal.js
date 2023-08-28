import { View, Text, Modal, TextInput, Button, Pressable } from "react-native";
import styles from "./Modal.style";
import { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import usePost from "../../hooks/usePost";
import nextId from "react-id-generator";

const ModalComponent = ({ isVisible, onClose }) => {
  const [value, setValue] = useState("");

  const { post } = usePost({ name: value, roomId: nextId() });

  const postData = () => {
    post();
    onClose();
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalOverlay}></View>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Add room name..."
              style={styles.input}
              value={value}
              onChangeText={(name) => setValue(name)}
            />
            <Button title="add" color="#f81" onPress={postData} />
            <Pressable style={styles.close_btn} onPress={onClose}>
              <Icon name="close" color="#fff" size={20} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
