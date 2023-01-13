import * as STRINGS from "./strings";

export function IsEmpty (value) {
    return  value === undefined || value === null || (typeof value === "object" && Object.keys(value).length === 0 ) || (typeof value === "string" && value.trim().length === 0)
}

export function getPokeImageUrl(value) {
    let split_1 = value.split("https://pokeapi.co/api/v2/pokemon/");
    let split_2 = split_1[1].split("/");
    return `${STRINGS.IMG_API}${split_2[0]}.png`; 
}