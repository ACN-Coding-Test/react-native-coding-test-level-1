import { createAction } from '@reduxjs/toolkit'
import { Pokedex, PokedexConfig, Pokemon } from '../typings';

export const retrievePokedexAction = createAction<PokedexConfig>('POKEDEX/RETRIEVE_LIST');
export const storePokedexAction = createAction<Pokedex[]>('POKEDEX/STORE_POKEDEX_LIST');

export const retrievePokemonAction = createAction<string>('POKEDEX/RETRIEVE_POKEMON');
export const storePokemonDetailsAction = createAction<Pokemon>('POKEDEX/STORE_POKEMON');
export const clearPokedexAction = createAction('POKEDEX/CLEAR_LIST');


