import { createSelector } from 'reselect';
import { GlobalState } from '../../store/typings';

export const pokedexMainSelector = (state: GlobalState) => state.pokedex;
export const PokedexSelector = createSelector(pokedexMainSelector, pokedex => pokedex.items);
export const pokemonDetailSelector = createSelector(pokedexMainSelector, pokedex => pokedex.details);



