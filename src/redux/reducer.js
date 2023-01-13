import { UPDATE_POKEMON_LIST, UPDATE_POKEMON_DATA } from "./types";

const initialState = {
    pokemon_list: [],
    pokemon_details: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_POKEMON_LIST:
            return { ...state, pokemon_list: action.payload };
        case UPDATE_POKEMON_DATA:
            return { ...state, pokemon_details: action.payload };
        default:
            return state;
    }
}