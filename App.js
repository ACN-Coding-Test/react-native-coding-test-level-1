import React, {useContext, useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FormScreen from './src/screens/FormScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Contact Us"
        onPress={() => {
          navigation.navigate('Form');
        }}
      />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
