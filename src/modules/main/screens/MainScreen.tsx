import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {

	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Button
				style={styles.button}
				onPress={() => { navigation.navigate('ContactUsScreen')}}
				mode='contained'
			>{'Contact Us'}</Button>
			<Button
				style={styles.button}
				onPress={() => { navigation.navigate('PokedexList')}}
				mode='contained'
			>
			{'View Catalog'}
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: '90%',
		marginHorizontal: 20,
		marginVertical: 5
	}
  });


export default MainScreen;
