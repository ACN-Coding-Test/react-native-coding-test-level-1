import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import Store from './src/redux'
const Stack = createNativeStackNavigator();

//Screens
import MainScreen from "./src/screens/Main";
import ContactScreen from "./src/screens/ContactUs";
import CatalogListScreen from "./src/screens/Catalog/List";
import CatalogItemScreen from "./src/screens/Catalog/Item";

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{ title: 'Home' }} name="MainScreen" component={MainScreen} />
        <Stack.Screen  options={{ title: 'Contact Us' }} name="ContactScreen" component={ContactScreen} />
        <Stack.Screen  options={{ title: 'Catalog' }} name="CatalogScreen" component={CatalogListScreen} />
        <Stack.Screen  options={({ route }) => ({ title: route.params.itemName })} name="CatalogItemScreen" component={CatalogItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


