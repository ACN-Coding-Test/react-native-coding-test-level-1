import { ActionCreators } from '@react-navigation/native';
import { createAction } from '@reduxjs/toolkit'

export const refreshPokedexListAction: ActionCreators = createAction<boolean>('POKEDEX/REFRESH_LIST');
export const storePokedexListAction: ActionCreators = createAction<PokedexList[]>('POKEDEX/STORE_POKEDEX_LIST');
export const clearPokedexListAction: ActionCreators = createAction('POKEDEX/CLEAR_LIST');


