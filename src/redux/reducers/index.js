import { combineReducers } from 'redux';
import pokemon from './pokemon';

const rootReducer = combineReducers({
  pokemonState: pokemon
});

export default rootReducer;
