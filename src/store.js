import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './userReducer';

const reducer = combineReducers({
  user: userReducer,
});

// export const store = createStore(reducer, initialState);
export const store = createStore(reducer, applyMiddleware(thunk));
