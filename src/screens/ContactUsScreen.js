import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Alert,
  Modal,
  TouchableOpacity
} from 'react-native';
import FieldLabel from '../components/fieldLabel';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { globalStyles } from '../utils/style.js';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const usernameRef = useRef();
  const emailRef = useRef();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  //   const [username, setUsername] = useState("asdnernn");
  //   const [email, setEmail] = useState("asndks@mail.com");
  //   const [date, setDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);
  const [DD, setDD] = useState(null);
  const [MM, setMM] = useState(null);
  const [YYYY, setYYYY] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('useEffect check username', username);
  }, [username]);

  useEffect(() => {
    console.log('useEffect check email', email);
  }, [email]);

  useEffect(() => {
    if (date) {
      if (date.getDate() < 10) {
        setDD('0' + date.getDate());
      } else {
        setDD(date.getDate());
      }

      if (date.getMonth() + 1 < 10) {
        setMM('0' + (date.getMonth() + 1));
      } else {
        setMM(date.getMonth() + 1);
      }

      setYYYY(date.getFullYear());
    }
  }, [date]);

  function submit() {
    // console.log(username);
    // console.log(email);
    // console.log(date);
    if (validateUsernameInput() && validateEmailInput() && date != null) {
      console.log('all conditions passed');
      setModalVisible(!modalVisible);
    }
  }

  function validateUsernameInput() {
    // A text field to input user's name
    // Must not be null
    // Must contain letters only
    // Maximum of 50 chars
    if (username === '' || username === null) {
      Alert.alert('Username cannot be empty', 'Enter a valid username', [
        { text: 'OK', onPress: () => usernameRef.current.focus() }
      ]);
      return false;
    }

    const regex = /^[A-Za-z]+$/;
    if (!username.match(regex)) {
      Alert.alert('Enter a valid username', 'Username can only be characters', [
        { text: 'OK', onPress: () => usernameRef.current.focus() }
      ]);
      return false;
    }

    return true;
  }

  function validateEmailInput() {
    // A text field to input user's email
    // Must be a valid email address
    // console.log("validating email");
    // if (email == "" || email == null) {
    //   console.log("null hit");
    //   emailRef.current.focus();
    //   return;
    // }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.match(emailRegex)) {
      Alert.alert('Invalid email format', 'Enter a valid email', [
        { text: 'OK', onPress: () => emailRef.current.focus() }
      ]);
      return false;
    }
    return true;
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log('A date has been picked: ', date);
    setDate(date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.userNameFieldContainer}>
        <FieldLabel label={'Username'}></FieldLabel>
        <TextInput
          ref={usernameRef}
          style={{
            flex: 5,
            backgroundColor: 'lightgrey',
            height: 35,
            width: '100%',
            borderRadius: 5
          }}
          editable
          maxLength={50}
          onChangeText={(val) => {
            setUsername(val);
          }}
          //   onBlur={() => {
          //     validateUsernameInput();
          //   }}
          //   onEndEditing={() => {
          //     validateUsernameInput();
          //   }}
        />
      </View>

      <View style={globalStyles.marginVertical5}></View>
      <View style={styles.userNameFieldContainer}>
        <FieldLabel label={'Email'}></FieldLabel>
        <TextInput
          ref={emailRef}
          style={{
            flex: 5,
            backgroundColor: 'lightgrey',
            height: 35,
            width: '100%',
            borderRadius: 5
          }}
          editable
          maxLength={40}
          onChangeText={(val) => {
            setEmail(val);
          }}
          //   onEndEditing={() => {
          //     validateEmailInput();
          //   }}
        />
      </View>
      <View style={globalStyles.marginVertical5}></View>
      <View style={styles.birthdayFieldContainer}>
        <FieldLabel label={'Birthday'}></FieldLabel>
        <View style={styles.birthdayViewContainer}>
          <Text style={{ fontSize: 18 }}>
            {DD || 'DD'}/{MM || 'MM'}/{YYYY || 'YYYY'}
          </Text>
        </View>

        <View style={styles.birthdayButtonPickerStyleStyle}>
          <Button onPress={showDatePicker} title="Choose date" color="blue" />
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />

      <View style={styles.submitButtonStyle}>
        <Button onPress={submit} title="Submit" color="blue" />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTitle}>
              <Text style={styles.modalTitleText}>Confirm submission</Text>
            </View>
            <View style={styles.modalContent}>
              <View style={globalStyles.flexDirectionRow}>
                <Text style={globalStyles.boldText}>Username: </Text>
                <Text>{username}</Text>
              </View>

              <View style={globalStyles.flexDirectionRow}>
                <Text style={globalStyles.boldText}>Email: </Text>
                <Text>{email}</Text>
              </View>

              <View style={globalStyles.flexDirectionRow}>
                <Text style={globalStyles.boldText}>Birthday: </Text>
                <Text>
                  {DD}/{MM}/{YYYY}
                </Text>
              </View>
            </View>
            <View style={globalStyles.flexDirectionRow}>
              <TouchableOpacity
                style={[styles.cancelButton]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.1 }}></View>
              <TouchableOpacity
                style={[styles.confirmButton]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTimeout(() => {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'MainScreen' }]
                    });
                  }, 100);
                }}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userNameFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  emailFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  birthdayFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  birthdayViewContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  birthdayButtonPickerStyleStyle: {
    flex: 2,
    backgroundColor: 'lightgrey',
    borderRadius: 10
  },
  submitButtonStyle: {
    backgroundColor: 'lightgrey',
    borderRadius: 10
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    // margin: 20,
    // backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    height: 200,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  cancelButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#ff2e00',
    flex: 1
  },
  confirmButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
    flex: 1
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    textAlign: 'center'
  },
  modalTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%'
  },
  modalTitleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  modalContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
});

export default ContactUsScreen;
