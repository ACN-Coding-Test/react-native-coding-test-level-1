import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RootStackParamList} from './model';
import {Catalog, Contact, Home} from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="contact" component={Contact} />

      <Stack.Screen name="pokemonList" component={Catalog.PokemonList} />
      <Stack.Screen name="pokemonInfo" component={Catalog.PokemonInfo} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
