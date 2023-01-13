import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "./src/screens/dashboard/dashboard";
import ContactScreen from "./src/screens/contact/contactScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DashboardScreen" options={{title: "Pokemon App"}} component={Dashboard} />
        <Stack.Screen name="ContactScreen" options={{title: "Contact Us"}} component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}