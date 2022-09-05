import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { globalStyles } from '../utils/style.js';

const MainScreen = () => {
  const navigation = useNavigation();

  function proceed() {
    navigation.navigate('ContactUsScreen');
  }

  function viewCatalog() {
    navigation.navigate('PokemonListScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contactUsButton}>
        <Button onPress={proceed} title="Contact Us" color="blue" />
      </View>

      <View style={globalStyles.marginVertical5}></View>

      <View style={styles.contactUsButton}>
        <Button onPress={viewCatalog} title="View Catalog" color="blue" />
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
