import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoaded: false,
  count: 0,
  isLoggedin: false,
  token: null,
};

export const SET_IS_LOADED = 'SET_IS_LOADED';
export const ADD_COUNT = 'ADD_COUNT';
export const MINUS_COUNT = 'MINUS_COUNT';
export const SET_IS_LOGGEDIN = 'SET_IS_LOGGEDIN';

// action creator
export const setIsLoggedin = isLoggedin => ({
  type: SET_IS_LOGGEDIN,
  isLoggedin,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADED:
      return {...state, isLoaded: action.isLoaded};
    case ADD_COUNT:
      return {...state, count: state.count + action.num};
    case MINUS_COUNT:
      return {...state, count: state.count - action.num};
    case SET_IS_LOGGEDIN:
      console.log(action.isLoggedin);
      return {...state, isLoggedin: action.isLoggedin};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
