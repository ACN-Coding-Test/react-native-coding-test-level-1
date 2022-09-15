import React from 'react';
import { FlatList, Platform, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Button, Card, Divider, Title } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PokedexListScreen = () => {

	const [data, dataSet] = React.useState<PokedexList[]>(null)
	const navigation = useNavigation();

	React.useEffect(() => {
		async function fetchMyAPI() {
			const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
			dataSet(response.data.results)
		}

		fetchMyAPI();
	}, [])

	const renderItem = ({ item }: { item: PokedexList }) => (
		<Card style={{ backgroundColor: 'white', margin: 10 }}>
			<Card.Title title={item.name} />
			<Divider style={{backgroundColor: 'black'}} />
			<Card.Actions>
				<Button onPress={() => {navigation.navigate('Pokedex', { url: item.url})}}>{'View'}</Button>
			</Card.Actions>
		</Card>
	);

	return (
		<View style={styles.viewContainer}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.url}
				onEndReachedThreshold={0.2}
				// onEndReached={fetchMoreData}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		// backgroundColor: 'white'
	},
	textInput: {
		marginHorizontal: 20,
		marginTop: 10,
	},
	helperText: {
		marginHorizontal: 20,
	},
	title: {
		marginHorizontal: 20,
		marginTop: 10,
	},
	datePicker: {
		marginHorizontal: 20,
		marginTop: 10,
		flex: 1
	},
	button: {
		marginHorizontal: 20,
		marginTop: 10,
	}
});

export default PokedexListScreen;
