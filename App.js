import React, {useContext, useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FormScreen from './screens/FormScreen';
import PokeScreen from './screens/PokemonScreen';
import DetailScreen from './screens/DetailScreen';

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
      <Button
        title="View Catalog"
        onPress={() => {
          navigation.navigate('Poke');
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
        <Stack.Screen name="Poke" component={PokeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
