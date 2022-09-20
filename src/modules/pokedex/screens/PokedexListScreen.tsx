import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Divider } from 'react-native-paper';
import { retrievePokedexListAction } from '../src/pokedexAction';
import { pokedexListSelector } from '../src/pokedexSelectors';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Pokedex } from '../typings';
import { GlobalState } from '../../store/typings';

interface PokedexStateProps {
	items: Pokedex[]
}

interface PokedexDispatchProps {
	retrievePokedexList: typeof retrievePokedexListAction
}

type PokedexProps = PokedexStateProps & PokedexDispatchProps;

const PokedexListScreen = (props: PokedexProps) => {

	const [ isFetching, setIsFetching ] = React.useState(false)
	const navigation = useNavigation();

	React.useEffect(() => {
		props.retrievePokedexList({ isRefresh: false})
	}, [])

	const refreshList = () => {
		setIsFetching(true);
		props.retrievePokedexList({ isRefresh: true})
		setIsFetching(false);
	}

	const renderItem = ({ item }: { item: Pokedex }) => (
		<Card style={{ backgroundColor: 'white', margin: 10 }}>
			<Card.Title title={item.name} />
			<Divider style={{backgroundColor: 'black'}} />
			<Card.Actions>
				<Button onPress={() => {navigation.navigate('Pokedex', { name: item.name})}}>{'View'}</Button>
			</Card.Actions>
		</Card>
	);

	return (
		<View style={styles.viewContainer}>
			<FlatList
				data={props.items}
				renderItem={renderItem}
				// keyExtractor={item => item.name}
				onEndReachedThreshold={0.2}
				onRefresh={refreshList}
				refreshing={isFetching}
				onEndReached={() => {
					props.retrievePokedexList({ isRefresh: false})
				}}
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

export default connect<PokedexStateProps, PokedexDispatchProps>(
	(state: GlobalState) => ({
		items: pokedexListSelector(state),
	}),
	{
		retrievePokedexList: retrievePokedexListAction
	},
)(PokedexListScreen);

