import { View, Text, Modal, TextInput, Button } from "react-native";
import styles from "./Modal.style";

const ModalComponent = ({ isVisible, onPress }) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalOverlay}></View>
          <View style={styles.modalContent}>
            <TextInput placeholder="Add room name..." style={styles.input} />
            <Button title="add" color="#f81" onPress={onPress}/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
