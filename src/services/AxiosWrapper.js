import axios from "axios"

function getAxiosInstance() {
  return axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default {
  getAxiosInstance: getAxiosInstance,
}
