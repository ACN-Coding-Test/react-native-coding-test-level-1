import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import {
  Button,
  Input,
  DateTimePicker,
  Modal,
  ListItem,
} from "../../components";
import theme from "../../theme";
import Utils from "../../utils";

function MainScreen() {
  const [txtName, setName] = useState("");
  const [txtEmail, setEmail] = useState("");
  const [txtDate, setDate] = useState(new Date());
  const [isVisibleModal, setVisibleModal] = useState(false);

  const validateForm = () => {
    if (txtName === "" || txtEmail === "" || !txtDate) {
      throw new Error("Fields cannot be empty");
    } else if (!Utils.validateLetters(txtName)) {
      throw new Error("Name must contain letters only");
    } else if (!Utils.validateEmail(txtEmail)) {
      throw new Error("Please enter valid email");
    }
    return true;
  };

  const onSubmit = () => {
    try {
      if (validateForm()) {
        setVisibleModal(true);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder={"Your name"}
        inputStyles={styles.inputStyle}
        maxLength={50}
        value={txtName}
        onChangeText={(txt) => setName(txt)}
      />
      <Input
        placeholder={"Your Email"}
        inputStyles={styles.inputStyle}
        value={txtEmail}
        onChangeText={(txt) => setEmail(txt)}
      />
      <DateTimePicker
        inputStyles={styles.inputStyle}
        maximumDate={new Date()}
        onChange={(event, date) => setDate(date)}
      />

      <Button title={"Submit"} onPress={() => onSubmit()} />
      <Modal
        isVisible={isVisibleModal}
        setVisibleModal={setVisibleModal}
        renderItem={(item) => (
          <ListItem title={item.title} subTitle={item.subTitle} />
        )}
        data={[
          {
            title: "Name",
            subTitle: txtName,
          },
          {
            title: "Email",
            subTitle: txtEmail,
          },
          {
            title: "BirthDay",
            subTitle: Utils.formatDate(txtDate),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.padding.default,
  },
  inputStyle: {
    marginBottom: theme.padding.default,
  },
});

export default MainScreen;
