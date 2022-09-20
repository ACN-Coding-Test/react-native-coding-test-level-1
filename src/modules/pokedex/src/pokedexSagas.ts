import { all, call, take, put, select } from 'redux-saga/effects'
import axios from 'axios';
import { clearPokedexListAction, retrievePokedexListAction, retrievePokemonAction, storePokemonDetailsAction, storePokedexListAction } from './pokedexAction';
import { pokedexListSelector } from './pokedexSelectors';
import { PokedexListConfig, Pokemon } from '../typings';

export default function* pokedexRuntime() {
	yield all([
		retrievePokedexList(),
		retrievePokedexDetail()
	]);
}

function* retrievePokedexList() {
	while (true) {
		try {

			// Refresh Action
			const action = yield take(retrievePokedexListAction.toString());
			const actionPayload: PokedexListConfig = action.payload;
			const isRefresh: boolean = actionPayload.isRefresh;

			if (isRefresh) {
				yield put(clearPokedexListAction())
			}

			const pokedexList: Pokedex[] = yield select(pokedexListSelector);

			const offsetValue = pokedexList.length

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/unbound-method
			const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offsetValue}`);
			const result: Pokedex[] = response.data.results
			yield put(storePokedexListAction(result))


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
