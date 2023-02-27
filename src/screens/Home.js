import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomButton
        buttonColor="transparent"
        titleColor="#000"
        title="Contact Us"
        buttonStyle={{
          width: "40%",
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "#1c1c1c",
          borderRadius: 6,
        }}
        textStyle={{ fontSize: 20 }}
        onPress={() => navigation.navigate("Form")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
});

/*
  <Button
        title="Contact Us"
        mode="contained"
        onPress={() => navigation.navigate("Form")}
      /> 

*/
