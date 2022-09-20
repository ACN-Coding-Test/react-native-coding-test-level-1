/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import { Pokemon } from '../typings';
import { retrievePokemonAction } from '../src/pokedexAction';
import { pokemonDetailSelector } from '../src/pokedexSelectors';
import { connect } from 'react-redux';
import { GlobalState } from '../../store/typings';
import { NavigationContainerProps } from '@react-navigation/native';

interface PokemonStateProps {
	details: Pokemon
}

interface PokemonDispatchProps {
	retrievePokemonDetails: typeof retrievePokemonAction
}

const PokemonScreen = (props: PokemonStateProps & PokemonDispatchProps & NavigationContainerProps) => {

	const { name } = props.route.params;
	const [data, dataSet] = React.useState(null)

	const renderBasicInformation = (title: string, details: string | number | object) => {
		return (
			<View style={styles.basicInformationContainer}>
				<Text style={styles.title}>{title}: </Text>
				<Text style={styles.details}>{details}</Text>
			</View>
		)
	}
	React.useEffect(() => {
		props.retrievePokemonDetails(name)
	}, [])

	return (
		<ScrollView style={styles.viewContainer}>
			{props.details ?
				<View style={styles.informationContainer}>
					{renderBasicInformation('Name', props.details.name)}
					{renderBasicInformation('Height', props.details.height)}
					{renderBasicInformation('Weight', props.details.weight)}
					{renderBasicInformation('Base Experience', props.details.base_experience)}
				</View>
				 :
				<Title>{"Loading..."}</Title>}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		// margin: 10,
		backgroundColor: 'white'
	},
	informationContainer: {
		margin: 20
	},
	basicInformationContainer: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontWeight: '500',
		fontSize: 20
	},
	details: {
		// fontWeight: '500',
		fontSize: 20
	}
});


export default connect<PokemonStateProps, PokemonDispatchProps>(
	(state: GlobalState) => ({
		details: pokemonDetailSelector(state),
	}),
	{
		retrievePokemonDetails: retrievePokemonAction
	},
)(PokemonScreen);

