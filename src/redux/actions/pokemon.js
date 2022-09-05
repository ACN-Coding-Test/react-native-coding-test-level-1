const appendPokemonList = (newPokemonList) => {
  return {
    type: 'APPEND_POKEMON_LIST',
    payload: newPokemonList
  };
};

const resetPokemonList = () => {
  return {
    type: 'RESET_POKEMON_LIST'
  };
};

export default {
  appendPokemonList,
  resetPokemonList
};
