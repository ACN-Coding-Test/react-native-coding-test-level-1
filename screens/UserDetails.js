import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
  Button,
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Typography, Colors } from '../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserDetails = () => {
  const [date, setDate] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const isEmail = (text) => /\w+[@]\w+[.]\w+/.test(text)
  const isName = (text) => /^[A-Za-z ]+$/.test(text)

  const initialPageState = {
    username: '',
    usernameErrorMsg: null,
    email: '',
    emailErrorMsg: null,

  };

  const pageReducer = (prevState, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return {
          ...prevState,
          username: action.field,
          usernameErrorMsg: action.errorMsg,
        };
      case 'SET_EMAIL':
        return {
          ...prevState,
          email: action.field,
          emailErrorMsg: action.errorMsg,
        };


      default:
        break;
    }
  };
  const [pageState, dispatch] = React.useReducer(pageReducer, initialPageState);

  const textInputChange = val => {
    if (val.trim().length > 0) {
      dispatch({
        type: 'SET_USERNAME',
        field: val,
        errorMsg: null,
      });
    } else {
      dispatch({
        type: 'SET_USERNAME',
        field: val,
        errorMsg: "Username won't be null",
      });
    }
  };

  const emailInputChange = val => {
    if (val.trim().length > 0) {
      dispatch({
        type: 'SET_EMAIL',
        field: val,
        errorMsg: null,
      });
    } else {
      dispatch({
        type: 'SET_EMAIL',
        field: val,
        errorMsg: "Email won't be null",
      });
    }
  };

  return (
      <View style={styles.container}>
        <Text style={[Typography.smallTextBold, styles.dobText]}>User Name</Text>
        <View>
          <TextInput
            placeholder="USER NAME"
            placeholderTextColor="gray"
            maxLength={50}
            style={styles.input}
            value={pageState.username}
            onChangeText={val => textInputChange(val)}
          />
          {pageState.usernameErrorMsg ? (
            <Animatable.View
              animation="fadeInLeft"
              duration={500}
            >
              <Text style={[Typography.extraSmallTextBold,styles.errorMsg]}>
                {'  '} {pageState.usernameErrorMsg}{' '}
              </Text>
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[Typography.smallTextBold, styles.dobText]}>Email</Text>

        <View>
          <TextInput
            keyboardType='email-address'
            placeholder="EMAIL"
            style={styles.input}
            placeholderTextColor="gray"
            value={pageState.email}
            returnKeyType="go"
            onChangeText={val => {
              emailInputChange(val)
            }}
          />

          {pageState.emailErrorMsg ? (
            <Animatable.View
              animation="fadeInLeft"
              duration={500}
            >
              <Text style={[Typography.extraSmallTextBold,styles.errorMsg]}>
                {'  '} {pageState.emailErrorMsg}{' '}
              </Text>
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[Typography.smallTextBold, styles.dobText]}>Date Of Birth</Text>
        <View style={styles.input}>
          <TouchableOpacity onPress={() => setShowCalender(true)}>
            <Text style={Typography.smallTextBold}>{JSON.stringify(date).substring(1, 11)}</Text>
          </TouchableOpacity>
        </View>
        {showCalender &&
          <DateTimePicker
            testID="dateTimePicker"
            maximumDate={new Date()}
            value={date}
            mode='date'
            is24Hour
            onChange={(event, selectedDate) => {
              if (event?.type === 'dismissed') {
                setDate(date);
                setShowCalender(false)
                return;
              }
              setDate(selectedDate);
              setShowCalender(false)
            }}

          />
        }
        <View
style={styles.button}>
          <Button
            title='SUBMIT'
            onPress={() => {
              if (pageState.username.length <= 0)
                dispatch({
                  type: 'SET_USERNAME',
                  field: pageState.username,
                  errorMsg: "Username won't be null"
                });

              else if (!isName(pageState.username))
                dispatch({
                  type: 'SET_USERNAME',
                  field: pageState.username,
                  errorMsg: "Invalid text",
                });

              if (!isEmail(pageState.email))
                dispatch({
                  type: 'SET_EMAIL',
                  field: pageState.email,
                  errorMsg: 'Enter a valid email',
                });
              {
                isName(pageState.username) && isEmail(pageState.email) &&
                setModalVisible(true)
              }
            }}>

          </Button>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modal}>
            <Text style={[Typography.smallTextBold,styles.textColor]}>User Name:   {pageState.username}</Text>
            <Text style={[Typography.smallTextBold,styles.textColor]}>Email:   {pageState.email}</Text>
            <Text style={[Typography.smallTextBold,styles.textColor]}>Date of birth:   {JSON.stringify(date).substring(1, 11)}</Text>
          </View>
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    color: Colors.BLACK,
    height: 48,
    fontWeight: 'bold',
    paddingTop: 12,
    marginVertical: 10,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 0,
    marginHorizontal: 10,
    fontSize: 12,
    shadowColor: Colors.GREEN,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: Colors.WHITE
  },
  button: {
    marginTop: 50,
    marginHorizontal: 10
  },
  dobText: {
    marginHorizontal: 10,
    marginBottom: 10
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.OFFWHITE,
    height: Dimensions.get('window').height * 50 / 100,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: Dimensions.get('window').height * 25 / 100,
    shadowColor: Colors.GREEN,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: Colors.BLUE,
    borderWidth: 2
  },
textColor:{
  color:Colors.PRIMARY,
  marginVertical:15
},
errorMsg:{
  color:Colors.RED
}
});

export default UserDetails;
