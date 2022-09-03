import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';

const MainScreen = () => {
  const navigation = useNavigation();

  function proceed() {
    navigation.navigate('ContactUsScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contactUsButton}>
        <Button
          onPress={proceed}
          title="Contact Us"
          color="blue"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactUsButton: {
      backgroundColor: 'lightgrey',
      borderRadius: 10
  }
});

export default MainScreen;
