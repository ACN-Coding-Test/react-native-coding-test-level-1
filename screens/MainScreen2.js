import React from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

const MainScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='View Catalog'
        onPress={() =>
          navigation.navigate('Catalog')
        }
      >
      </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MainScreen2;
