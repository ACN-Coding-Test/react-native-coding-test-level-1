import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthday, setBirthday] = React.useState(new Date());
  const [isNameValid, setIsNameValid] = React.useState(true);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isBirthdayValid, setIsBirthdayValid] = React.useState(true);

  const validateName = (text) => {
    if (text === null || text === "") {
      setIsNameValid(false);
    } else if (!text.match(/^[a-zA-Z]+$/)) {
      setIsNameValid(false);
    } else if (text.length > 50) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  };

  const validateEmail = (text) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(text).toLowerCase())) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const validateBirthday = (text) => {
    const selectedDate = new Date(text);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      setIsBirthdayValid(false);
    } else {
      setIsBirthdayValid(true);
    }
  };

  const handleSubmit = () => {
    if (isNameValid && isEmailValid && isBirthdayValid) {
      Alert.alert(
        "Submission Successful",
        `Name: ${name}\nEmail: ${email}\nBirthday: ${birthday}`,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Name"
        maxLength={50}
        onChangeText={(text) => {
          setName(text);
          validateName(text);
        }}
        value={name}
        style={isNameValid ? {} : { borderColor: "red" }}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
          validateEmail(text);
        }}
        value={email}
        style={isEmailValid ? {} : { borderColor: "red" }}
      />
      <View>
        <DatePickerIOS
          date={birthday}
          onDateChange={(date) => {
            setBirthday(date);
            validateBirthday(date);
          }}
          maximumDate={new Date()}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
