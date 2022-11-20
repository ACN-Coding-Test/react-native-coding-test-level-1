import { Box } from "native-base";
import { useState, useEffect } from "react";

import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";

const ListOfPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=10"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(20);

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const res = await fetch(loadPokemon);
        const data = await res.json();

        function createPokemonObject(results) {
          results.forEach(async (pokemon) => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const data = await res.json();
            setPokemons((list) => [...list, data]);
          });
        }
        createPokemonObject(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokemons();
  }, []);

  const indexOfLastPost = currentPage * pokemonPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonPerPage;
  const currentPokemon = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box
      p="2"
      bg="primary.500"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        letterSpacing: "lg",
      }}
      shadow={2}
    >
      <PokemonList pokemons={currentPokemon} />
      <Pagination
        postsPerPage={pokemonPerPage}
        totalPosts={pokemons.length}
        paginate={paginate}
      />
    </Box>
  );
};

export default ListOfPokemon;
