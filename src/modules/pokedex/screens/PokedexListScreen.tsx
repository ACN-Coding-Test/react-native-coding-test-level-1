import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Divider } from 'react-native-paper';
import { refreshPokedexListAction } from '../src/pokedexAction';
import { pokedexListSelector } from '../src/pokedexSelectors';
import { connect } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { useNavigation } from '@react-navigation/native';

interface PokedexStateProps {
	items: PokedexList[]
}

interface PokedexDispatchProps {
	retrievePokedexList: typeof refreshPokedexListAction
}

type PokedexProps = PokedexStateProps & PokedexDispatchProps;

const PokedexListScreen = (props: PokedexProps) => {

	const [ isFetching, setIsFetching ] = React.useState(false)
	const navigation = useNavigation();
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(refreshPokedexListAction(false));
	}, [])

	const refreshList = () => {
		setIsFetching(true);
		dispatch(refreshPokedexListAction(true));
		setIsFetching(false);
	}

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
				data={props.items}
				renderItem={renderItem}
				// keyExtractor={item => item.name}
				onEndReachedThreshold={0.2}
				onRefresh={refreshList}
				refreshing={isFetching}
				onEndReached={() => {
					dispatch(refreshPokedexListAction(false))
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
		retrievePokedexList: refreshPokedexListAction
	},
)(PokedexListScreen);

