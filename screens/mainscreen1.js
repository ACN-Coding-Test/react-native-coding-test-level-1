import React from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

const Mainscreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Contact Us'
        onPress={() =>
          navigation.navigate('UserDetails')
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

export default Mainscreen1;
