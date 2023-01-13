import { ToastAndroid } from "react-native";
import { UPDATE_POKEMON_LIST, UPDATE_POKEMON_DATA } from "./types";
import { getService } from "../services/services";
import * as STRINGS from "../utils/strings";

export const updatePokemonList = (url) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getService(url)
            .then(response => {
                dispatch({
                    type: UPDATE_POKEMON_LIST,
                    payload: response
                })
                return resolve(response);
            }).catch(error => {
                ToastAndroid.show(STRINGS.LIST_FETCH_ERROR, ToastAndroid.BOTTOM, ToastAndroid.CENTER);
                return reject(error)
            })
    })
}

export const updatePokemonData = (url) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getService(url)
            .then(response => {
                dispatch({
                    type: UPDATE_POKEMON_DATA,
                    payload: response
                })
                return resolve(response);
            }).catch(error => {
                ToastAndroid.show(STRINGS.LIST_FETCH_ERROR, ToastAndroid.BOTTOM, ToastAndroid.CENTER);
                return reject(error)
            })
    })
}