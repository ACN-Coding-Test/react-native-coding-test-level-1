import {PokemonListResponse} from '../redux/pokemonReducer';

const fetchPokemon = async (offset: number) => {
    let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`,
        {
            method: 'GET'
        }
    );

    if (response.status === 200) {
        let data: PokemonListResponse = await response.json();

        console.log(JSON.stringify(data.results));

        return {
            list: data.results,
            count: data.count
        };
    }
};

export {fetchPokemon};
