import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button } from "../../components";
import theme from '../../theme';

function MainScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Button title={"Contact Us"} containerStyle={styles.buttonContainerStyle} onPress={() => navigation.navigate("ContactScreen")} />
      <Button title={"View Catalog"} onPress={() => navigation.navigate("CatalogScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.padding.default,
    justifyContent: "center",
  },
  buttonContainerStyle:{
    marginBottom: theme.padding.default,
  }
});


export default MainScreen;
