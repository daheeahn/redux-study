import {SET_IS_LOADED, ADD_COUNT} from './store';

export const aaa = () => {
  return async (dispatch, getState) => {
    const data = await fetch('https://yts.mx/api/v2/list_movies.json?limit=50');
    const {isLoaded} = getState();
    dispatch({type: SET_IS_LOADED, isLoaded: !isLoaded});
    dispatch({type: ADD_COUNT, num: 1});
    return data;
  };
};
