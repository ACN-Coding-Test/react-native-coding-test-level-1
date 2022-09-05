const INITIAL_STATE = {
  pokemonList: []
};

const pokemon = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'APPEND_POKEMON_LIST':
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.payload]
      };

    case 'RESET_POKEMON_LIST':
      return {
        ...state,
        pokemonList: []
      };

    default:
      return state;
  }
};

export default pokemon;
