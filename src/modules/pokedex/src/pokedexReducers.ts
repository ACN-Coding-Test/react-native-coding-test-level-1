import { clearPokedexAction, retrievePokedexAction, storePokedexAction, storePokemonDetailsAction } from './pokedexAction';
import { createReducer } from '@reduxjs/toolkit'
import { PokedexState } from '../typings';

// State
const POKEDEX_INITIAL_STATE: PokedexState = {
    items: [],
	details: null,
	pokemonCache: []
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const pokedexReducers = createReducer<PokedexState>(POKEDEX_INITIAL_STATE, (builder) => {
	builder
		.addCase(retrievePokedexAction, (state, action) => { POKEDEX_INITIAL_STATE })
		.addCase(storePokedexAction, (state, action) => {
			return Object.assign({}, state, {
				items: [...state.items, ...action.payload]
			})
		})
		.addCase(clearPokedexAction, (state, action) => {
			return Object.assign({}, state, {
				items: []
			})
		})
		.addCase(storePokemonDetailsAction, (state, action) => {
			return Object.assign({}, state, {
				details: action.payload
			})
		})
		.addDefaultCase((state, _) => { POKEDEX_INITIAL_STATE })
  //   builder.addCase(decrement, (state, action) => state - action.payload)
  })


export default pokedexReducers;
