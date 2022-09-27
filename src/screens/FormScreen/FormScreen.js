import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import validator from "validator";
import _ from "lodash";
import moment from "moment";
import { formStyle } from "./Style/FormScreenStyle";

export const FormScreen = () => {
  //USE STATE
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());
  const [dateText, setDateText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //FUCTIONS
  const openDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleOnSubmit = () => {
    if (_.isEmpty(userName.trim())) {
      alert("Username cannot be empty");
      return;
    }

    if (userName.trim().length > 50) {
      alert("Username cannot be longer than 50 character.");
      return;
    }

    if (/[^a-zA-Z]/.test(userName.trim())) {
      alert("Username contains letter only");
      return;
    }

    if (!validator.isEmail(email.trim())) {
      alert("Email is invalid.");
      return;
    }

    if (_.isEmpty(dateText)) {
      alert("Please input date of birth.");
      return;
    }

    Keyboard.dismiss();
    setModalVisible(true);
  };

  return (
    <View style={formStyle.wrapper}>
      <TextInput
        placeholder="Username"
        style={formStyle.textInput}
        value={userName}
        onChangeText={(value) => setUserName(value)}
      />
      <TextInput
        placeholder="Email"
        style={formStyle.textInput}
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={formStyle.dateInput}
        onPress={openDatePicker}
      >
        <Text style={{ color: _.isEmpty(dateText) ? "#C7C7CD" : "black" }}>
          {dateText || "Date of Birth"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={formStyle.submitButton}
        onPress={handleOnSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={formStyle.modalWrapper}
          onTouchStart={() => setModalVisible(false)}
        >
          <View style={formStyle.modalView}>
            <Text style={formStyle.modalTitle}>Confirmation</Text>
            <Text>Username: {userName}</Text>
            <Text>Email: {email} </Text>
            <Text>Date of Birth: {dateText}</Text>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={showPicker}>
        <View
          style={[formStyle.modalWrapper, { backgroundColor: "transparent" }]}
          onTouchStart={() => setShowPicker(false)}
        />
        <RNDateTimePicker
          value={selectDate}
          mode="date"
          maximumDate={new Date()}
          display="spinner"
          style={{
            borderRadius: 10,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
          }}
          time
          onChange={(event, date) => {
            setSelectDate(date);
            setDateText(moment(date).format("DD/MMMM/YYYY"));
          }}
        />
      </Modal>
    </View>
  );
};
