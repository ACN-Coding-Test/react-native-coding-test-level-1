import { createSelector } from 'reselect';

export const pokedexMainSelector = (state: GlobalState) => state.pokedex;
export const pokedexListSelector = createSelector(pokedexMainSelector, pokedex => pokedex.items);


