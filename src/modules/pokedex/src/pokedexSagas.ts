import { all, call, take, put } from 'redux-saga/effects'
import axios from 'axios';
import { clearPokedexListAction, refreshPokedexListAction, storePokedexListAction } from './pokedexAction';
import store from '../../store/store';
import { pokedexListSelector } from './pokedexSelectors';

export default function* pokedexRuntime() {
	yield all([
		retrievePokedexList(),
	]);
}

function* retrievePokedexList() {
	while (true) {
		try {

			// Refresh Action
			const action = yield take(refreshPokedexListAction.toString);
			const isReload: boolean = action.payload;


			if ( isReload ) {
				yield put(clearPokedexListAction())
			}

			const globalState = store.getState();
			const pokedexList = pokedexListSelector(globalState);
			const offsetValue = pokedexList.length

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/unbound-method
			const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offsetValue}`);
			yield put(storePokedexListAction(response.data.results))


		} catch(err) {
			console.log('err', err)
		}

	}
}
