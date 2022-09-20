import { combineReducers } from 'redux';
import pokedex from '../pokedex/src/pokedexReducers';

const mainReducer = {
	pokedex,
}

export default combineReducers(mainReducer);
