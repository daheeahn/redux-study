import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoggedin: null,
  token: null,
};

export const SET_IS_LOGGEDIN = 'SET_IS_LOGGEDIN';

// action creator
export const setIsLoggedin = isLoggedin => {
  console.log('오니???');
  return {
    type: SET_IS_LOGGEDIN,
    isLoggedin,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGEDIN:
      console.log(action.isLoggedin);
      return {...state, isLoggedin: action.isLoggedin};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
