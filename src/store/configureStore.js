import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const logger = createLogger({
  collapsed: true
});

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant(), logger)
  );
}
