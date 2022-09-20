import { all, call, take, put, select } from 'redux-saga/effects'
import axios from 'axios';
import { clearPokedexAction, retrievePokedexAction, retrievePokemonAction, storePokemonDetailsAction, storePokedexAction } from './pokedexAction';
import { PokedexSelector } from './pokedexSelectors';
import { PokedexConfig, Pokemon } from '../typings';

export default function* pokedexRuntime() {
	yield all([
		retrievePokedex(),
		retrievePokedexDetail()
	]);
}

function* retrievePokedex() {
	while (true) {
		try {

			// Refresh Action
			const action = yield take(retrievePokedexAction.toString());
			const actionPayload: PokedexConfig = action.payload;
			const isRefresh: boolean = actionPayload.isRefresh;

			if (isRefresh) {
				yield put(clearPokedexAction())
			}

			const Pokedex: Pokedex[] = yield select(PokedexSelector);

			const offsetValue = Pokedex.length

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/unbound-method
			const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offsetValue}`);
			const result: Pokedex[] = response.data.results
			yield put(storePokedexAction(result))


		} catch(err) {
			console.log('err', err)
		}

	}
}

function* retrievePokedexDetail() {
	while (true) {
		try {

			// Refresh Action
			const action = yield take(retrievePokemonAction.toString());
			const pokemonName: string = action.payload;

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/unbound-method
			const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
			const result: Pokemon = response.data
			// console.log('result', pokemonName, result);
			yield put(storePokemonDetailsAction(result))

		} catch(err) {
			console.log('err', err)
		}

	}
}
