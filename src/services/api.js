export const getPokemonList = async (dispatch, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => {
      const newPokemonList = json.results;
      return asyncLoop(dispatch, newPokemonList);
    })
    .catch((err) => {
      console.log('get pokemon list err', err);
    });
};

const asyncLoop = async (dispatch, newPokemonList) => {
  const allResults = [];

  for (const pokemon of newPokemonList) {
    const eachPokemonResult = await getPokemonPartialDetail(dispatch, pokemon);
    allResults.push(eachPokemonResult);
  }
  return allResults;
};

export const getPokemonDetail = async (dispatch, pokemonDetailUrl) => {
  return fetch(pokemonDetailUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log('get pokemon detail err', err);
    });
};

export const getPokemonPartialDetail = async (dispatch, pokemon) => {
  const pokemonName = pokemon.name;
  const url = `https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => {
      const partialDetail = {
        name: pokemon.name,
        url: pokemon.url,
        types: json.types,
        default_img: json.sprites.front_default
      };
      return partialDetail;
    })
    .catch((err) => {
      console.log('get pokemon subdetail err', err);
    });
};
