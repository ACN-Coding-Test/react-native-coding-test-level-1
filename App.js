import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Screens
import MainScreen from "./src/screens/Main";
import ContactScreen from "./src/screens/ContactUs";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{ title: 'Home' }} name="MainScreen" component={MainScreen} />
        <Stack.Screen  options={{ title: 'Contact Us' }} name="ContactScreen" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


