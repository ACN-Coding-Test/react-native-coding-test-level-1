import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Contact Us"
        onPress={() => navigation.navigate("ContactForm")}
      />
    </View>
  );
};

export default MainScreen;
