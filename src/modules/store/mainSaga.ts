import { all } from 'redux-saga/effects'
import pokedexRuntime from '../pokedex/src/pokedexSagas'

// rootSaga
export default function* rootSaga() {
  yield all([
    pokedexRuntime(),
  ])
}
