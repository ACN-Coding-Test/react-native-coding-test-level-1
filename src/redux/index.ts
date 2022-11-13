import {configureStore, Action} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {ThunkAction} from 'redux-thunk';

import ContactReducer from './contactReducer';
import PokemonReducer from './pokemonReducer';

const reducer = combineReducers({
    contact: ContactReducer,
    pokemon: PokemonReducer
});

export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
