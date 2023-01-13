import * as React from 'react';
//Third Party Packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//redux State
import InitialState from "./src/redux/reducer";
//Screen Imports
import Dashboard from "./src/screens/dashboard/dashboard";
import ContactScreen from "./src/screens/contact/contactScreen";
import CatalogScreen from './src/screens/catalog/catalogList';
import CatalogDetails from './src/screens/catalog/catalogDetails';
const Stack = createNativeStackNavigator();
const reducer = createStore(combineReducers({data:InitialState}), applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={reducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DashboardScreen" options={{ title: "Pokemon App" }} component={Dashboard} />
          <Stack.Screen name="ContactScreen" options={{ title: "Contact Us" }} component={ContactScreen} />
          <Stack.Screen name="CatalogScreen" options={{ title: "Catalogs" }} component={CatalogScreen} />
          <Stack.Screen name="CatalogDetailsScreen" options={{ title: "Pokemon Details" }} component={CatalogDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}