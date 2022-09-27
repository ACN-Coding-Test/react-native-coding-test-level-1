import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FormScreen } from "../screens/FormScreen/FormScreen";
import { MainScreen } from "../screens/MainScreen/MainScreen";

const RootStack = createStackNavigator();

export const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTitleStyle: {
            color: "black",
          },
          headerBackTitleVisible: false,
        }}
      >
        <RootStack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: "Main Screen" }}
        />
        <RootStack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{ title: "Form Submission" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
