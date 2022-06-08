import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button } from "../../components";

function MainScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Button title={"Contact Us"} onPress={() => navigation.navigate("ContactScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
});


export default MainScreen;
