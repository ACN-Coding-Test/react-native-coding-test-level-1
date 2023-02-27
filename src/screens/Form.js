import {
    SafeAreaView,
    TextInput,
    Button,
    StyleSheet,
    Text,
    Modal,
    View,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import CustomButton from "../components/CustomButton";
  
  const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState();
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [birthDateError, setBirthDateError] = useState();
  
    const [modalVisible, setModalVisible] = useState(false);
  
    var date = new Date();
    var currentDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  
    const pattern = /^[a-zA-Z]+$/;
  
    const validate = () => {
      if (!email.includes("@") || !email.includes(".com")) {
        setEmailError("Invalid Email");
      } else {
        setEmailError("");
      }
  
      if (!name.trim()) {
        setNameError("Name is required");
      } else if (name.length > 50) {
        setNameError("Name must be less than 50 characters");
      } else if (pattern.test(name) == false) {
        setNameError("Name must be characters only");
      } else {
        setNameError("");
      }
  
      if (birthDate > currentDate) {
        setBirthDateError("Date is future date");
      } else {
        setBirthDateError("");
      }
  
      if (nameError == "" && emailError == "" && birthDateError == "") {
        setModalVisible(!modalVisible);
      }
    };
  
    return (
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{birthDate}</Text>
            <CustomButton
              buttonColor="transparent"
              titleColor="#000"
              title="Hide Popup"
              buttonStyle={{
                width: "30%",
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "#1c1c1c",
                borderRadius: 6,
              }}
              textStyle={{ fontSize: 15 }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </Modal>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(text) => setName(text)}
          ></TextInput>
          <Text style={styles.errorText}>{nameError}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
          <Text style={styles.errorText}>{emailError}</Text>
          <TextInput
            style={styles.input}
            placeholder="Birthdate"
            value={birthDate}
            onChangeText={(birthDate) => setBirthDate(birthDate)}
          ></TextInput>
          <Text style={styles.errorText}>{birthDateError}</Text>
          <CustomButton
            buttonColor="transparent"
            titleColor="#000"
            title="Submit"
            buttonStyle={{
              width: "40%",
              alignSelf: "center",
              borderWidth: 1,
              borderColor: "#1c1c1c",
              borderRadius: 6,
            }}
            textStyle={{ fontSize: 20 }}
            onPress={validate}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Form;
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    errorText: {
      color: "red",
      marginLeft: 12,
    },
    modalView: {
      marginTop: 400,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
  });
  