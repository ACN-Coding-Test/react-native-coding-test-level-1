import { createAction } from '@reduxjs/toolkit'
import { Pokedex, PokedexListConfig, Pokemon } from '../typings';

export const retrievePokedexListAction = createAction<PokedexListConfig>('POKEDEX/RETRIEVE_LIST');
export const storePokedexListAction = createAction<Pokedex[]>('POKEDEX/STORE_POKEDEX_LIST');

export const retrievePokemonAction = createAction<string>('POKEDEX/RETRIEVE_POKEMON');
export const storePokemonDetailsAction = createAction<Pokemon>('POKEDEX/STORE_POKEMON');
export const clearPokedexListAction = createAction('POKEDEX/CLEAR_LIST');


