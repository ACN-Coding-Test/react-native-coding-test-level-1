import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const FormScreen = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userBirthday, setUserBirthday] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthday, setBirthday] = useState(null);

  const validation = () => {
    if (!userName) {
      Alert.alert('Name cannot be null.');
      }else if(userName.length>500){
        Alert.alert('Name cannot exceed 500 characters.')
      }else if(!/^[a-zA-Z]+$/.test(userName)){
        Alert.alert('Name should only contains letters.')
      }else if(!userEmail){
        Alert.alert('Email cannot be null.')
      }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail)){
        Alert.alert('Email isn\'t properly formatted.')
      }else if(birthday.getDate()>Date.now()){
        Alert('Birthday shouldn\'t be on the future.')
    } else {
      setModalVisible(true);
    }
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let d = date.toString();
    setUserBirthday(d);
    setBirthday(date);
    hideDatePicker();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Us Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        onChangeText={(userName) => setUserName(userName)}
      />
      <TextInput
        style={styles.input}
        placeholder="User Email"
        onChangeText={(userEmail) => setUserEmail(userEmail)}
      />
      <Button title="Select Your Birthday" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>User Name: {userName}</Text>
            <Text style={styles.modalText}>User Email: {userEmail}</Text>
            <Text style={styles.modalText}>User Birthday: {userBirthday}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => validation()}>
        <Text style={styles.textStyle}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
});
