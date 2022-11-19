import React from "react";
import { Input, Stack, FormControl, Box, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import { useRef, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "../components/Modal.js";

const FormSubmission = () => {
  const ref = useRef();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState();
  const [date, setDate] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    validate() ? setModalVisible(true) : console.log("Validation Failed");
  };

  const validate = () => {
    if (username === undefined || username === "") {
      setErrors({ ...errors, name: "Name is required" });
    } else if (username.length > 50) {
      setErrors({ ...errors, name: "Name too long" });
    }
    return true;
  };

  const onCheckText = (val) => {
    const letters = /^[A-Za-z]+$/;
    if (val.match(letters)) {
      setUsername(val);
    } else {
      setErrors({ ...errors, name: "Username cannot contain number!" });
    }
  };

  const onCheckEmail = (val) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.match(mailformat)) {
      setEmail(val);
    } else {
      setErrors({ ...errors, email: "Email is not valid" });
    }
  };

  return (
    <div>
      <FormControl>
        <Stack space={5}>
          <Stack>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(val) => onCheckText(val)}
              placeholder="Username"
              width={"200px"}
              isRequired
              type="text"
            />
            {errors && (
              <Text color="semantics.danger" style={{ width: 200 }}>
                {errors.name}
              </Text>
            )}
          </Stack>
          <Stack>
            <FormControl.Label style={{ width: 200 }}>E-mail</FormControl.Label>
            <Input
              p={2}
              width={"200px"}
              placeholder="E-mail"
              type="email"
              onChangeText={(val) => onCheckEmail(val)}
            />
          </Stack>

          <Stack>
            <label>Date</label>
            <DateTimePicker
              maximumDate={new Date(2022, 10, 20)}
              onChange={(val) => setDate(val)}
            />
          </Stack>
        </Stack>
      </FormControl>
      <button style={{ marginTop: 10 }} onClick={() => handleSubmit()}>
        Submit
      </button>
      <Modal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        username={username}
        email={email}
        date={date}
      />
    </div>
  );
};

export default FormSubmission;
