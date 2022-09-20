import { clearPokedexListAction, refreshPokedexListAction, storePokedexListAction } from './pokedexAction';
import { createReducer } from '@reduxjs/toolkit'

// State
const POKEDEX_INITIAL_STATE: PokedexState = {
    items: []
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const pokedexReducers = createReducer<PokedexState>(POKEDEX_INITIAL_STATE, (builder) => {
	builder
		.addCase(refreshPokedexListAction, (state, action) => { POKEDEX_INITIAL_STATE })
		.addCase(storePokedexListAction, (state, action) => {
			return Object.assign({}, state, {
				items: [...state.items, ...action.payload]
			})
		})
		.addCase(clearPokedexListAction, (state, action) => {
			return Object.assign({}, state, {
				items: []
			})
		})
		.addDefaultCase((state, _) => { POKEDEX_INITIAL_STATE })
  //   builder.addCase(decrement, (state, action) => state - action.payload)
  })


export default pokedexReducers;
