import {createSlice, createReducer, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from './index';
import {Dispatch} from 'redux';

export type PokemonList = {
  name: string;
  url: string;
};

type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonList>;
};

export type PokemonInfo = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: false;
    slot: number;
  }>;
  base_experience: number;
  forms: Array<{
    name: string;
    url: string;
  }>;
  game_indices: Array<{
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }>;

  location_area_encounters: string;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }>;
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
};

type Pokemon = {
  loading: boolean;
  pokemon_count: number;
  list: Array<PokemonList>;
  pokemonInfo: PokemonInfo;
  offset: number;
};

const pokemonState = {
  loading: false,
  pokemon_count: 0,
  list: [],
  pokemonInfo: {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    types: [],
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    location_area_encounters: '',
    moves: [],
    stats: [],
  },
  offset: 10,
} as Pokemon;

const pokemonSlice = createSlice({
  name: 'contact',
  initialState: pokemonState,
  reducers: {
    setLoadingStart: state => {
      state.loading = true;
    },

    setLoadingEnd: state => {
      state.loading = false;
    },

    onSetPokemonList: (
      state,
      {
        payload,
      }: PayloadAction<{
        value: Array<PokemonList>;
      }>,
    ) => {
      let {value} = payload;
      state.list = value;
    },

    onSetPokemonInfo: (
      state,
      {
        payload,
      }: PayloadAction<{
        value: PokemonInfo;
      }>,
    ) => {
      let {value} = payload;
      state.pokemonInfo = value;
    },

    addOffset: state => {
      state.offset = state.offset + 10;
    },

    deductOffset: state => {
      state.offset = state.offset - 10;
    },

    setPokemonCount: (
      state,
      {
        payload,
      }: PayloadAction<{
        value: number;
      }>,
    ) => {
      const {value} = payload;
      state.pokemon_count = value;
    },
  },
});

export const {
  setLoadingStart,
  setLoadingEnd,
  onSetPokemonInfo,
  onSetPokemonList,
  addOffset,
  deductOffset,
  setPokemonCount,
} = pokemonSlice.actions;

export const getPokemonList =
  (offset: number): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStart());

      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`,
        {
          method: 'GET',
        },
      );

      if (response.status === 200) {
        let data: PokemonListResponse = await response.json();
        dispatch(setPokemonCount({value: data.count}));
        dispatch(onSetPokemonList({value: data.results}));
      }

      dispatch(setLoadingEnd());
    } catch (error) {
      console.log(error);

      dispatch(setLoadingEnd());
    }
  };

export const getPokemonInfo =
  (url: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStart());

      let response = await fetch(url, {
        method: 'GET',
      });

      if (response.status === 200) {
        let data: PokemonInfo = await response.json();
        dispatch(onSetPokemonInfo({value: data}));
      }

      dispatch(setLoadingEnd());
    } catch (error) {
      console.log(error);

      dispatch(setLoadingEnd());
    }
  };

export default pokemonSlice.reducer;
