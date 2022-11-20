import React from "react";
import PokemonDetail from "./PokemonDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <div>
        <div>
          <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
        </div>

        <div>
          <h5>{pokemon.name}</h5>
        </div>
      </div>
      <button
        onClick={() =>
          navigation.navigate("PokemonDetail", {
            screen: "PokemonDetail",
            params: {
              pokemon,
            },
          })
        }
      >
        Details
      </button>
    </div>
  );
};

export default Pokemon;
