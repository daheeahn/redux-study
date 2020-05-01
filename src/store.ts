import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export interface State {
  isLoggedin: boolean;
  token: string;
  count: number;
}

const initialState: State = {
  isLoggedin: null,
  token: null,
  count: 0,
};

export const SET_IS_LOGGEDIN = 'SET_IS_LOGGEDIN';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// action creator
export const setIsLoggedin = isLoggedin => {
  return {
    type: SET_IS_LOGGEDIN,
    isLoggedin,
  };
};

export const increase = () => {
  return {
    type: INCREMENT,
  };
};

export const decrease = () => ({
  type: DECREMENT,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGEDIN:
      return {...state, isLoggedin: action.isLoggedin};
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
