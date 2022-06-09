import AxiosWrapper from "./AxiosWrapper";


export function getPokemonList(start = 0) {
    return AxiosWrapper.getAxiosInstance().get(`/pokemon?limit=10&offset=${start}`)
}

export function getPokemonLItem(id) {
    return AxiosWrapper.getAxiosInstance().get(`/pokemon/${id}`)
}
