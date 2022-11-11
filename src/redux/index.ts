import {configureStore, Action} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {ThunkAction} from 'redux-thunk';

import ContactReducer from './contactReducer';
import PokemonReducer from './pokemonReducer';

const reducer = combineReducers({
  contact: ContactReducer,
  pokemon: PokemonReducer,
});

// A store is an immutable object tree in Redux. A store is a state container which holds the application's state.
// Redux can have only a single store in your application.
// Whenever a store is created in Redux, you need to specify the reducer.
export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
