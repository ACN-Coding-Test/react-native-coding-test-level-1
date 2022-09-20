// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { useDispatch } from 'react-redux'

import rootReducer from './mainReducer';
import rootSaga from './mainSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;
