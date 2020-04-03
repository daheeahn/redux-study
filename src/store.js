import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoaded: false,
  count: 0,
};

export const SET_IS_LOADED = 'SET_IS_LOADED';
export const ADD_COUNT = 'ADD_COUNT';
export const MINUS_COUNT = 'MINUS_COUNT';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADED:
      return {...state, isLoaded: action.isLoaded};
    case ADD_COUNT:
      return {...state, count: state.count + action.num};
    case MINUS_COUNT:
      return {...state, count: state.count - action.num};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
