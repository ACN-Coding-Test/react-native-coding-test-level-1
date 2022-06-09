import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import item from './item/reducer'
import logger from 'redux-logger'
// Combine all
const appReducer = combineReducers({
    item
})

const middlewares = [
  thunk
]

if (__DEV__) {
  middlewares.push(logger)
}
export default createStore(appReducer, applyMiddleware(...middlewares))
