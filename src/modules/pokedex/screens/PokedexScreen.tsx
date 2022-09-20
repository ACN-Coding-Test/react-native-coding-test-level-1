/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, Title } from 'react-native-paper';
import axios from 'axios';

const PokedexScreen = ({ route, navigation }) => {

	const { url } = route.params;
	const [data, dataSet] = React.useState(null)

	React.useEffect(() => {
		async function fetchMyAPI() {
			const response = await axios.get(url);
			dataSet(JSON.stringify(response.data))
		}

		fetchMyAPI();
	}, [])

	return (
		<View style={styles.viewContainer}>
			<Title>{data}</Title>
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		margin: 10,
	}
});

export default PokedexScreen;
