import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import ListOfPokemon from "./src/screen/ListOfPokemon";
import HomeScreen from "./src/screen/HomeScreen";
import PokemonDetail from "./src/components/PokemonDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Pokemon" component={ListOfPokemon} />
              <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
