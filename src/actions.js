import {Alert} from 'react-native';
import {SET_IS_LOADED, ADD_COUNT} from './store';

export const login = (email, pw) => {
  return async (dispatch, getState) => {
    try {
      return true;
      // const {token} = getState();
      // const response = await fetch(`??`, {
      //   method: 'POST',
      //   headers: {
      //     // Accept: 'application/json',
      //     // 'Content-Type': 'application/json',
      //     // 'x-access-token': token
      //   },
      //   body: JSON.stringify({
      //     email,
      //     pw,
      //   }),
      // });
      // const responseJson = await response.json();
      // switch (responseJson.status) {
      //   case 201: {
      //     return true;
      //   }
      //   case 404: {
      //     return false;
      //   }
      // }
    } catch (err) {
      Alert.alert(
        '서버와의 연결이 좋지 않습니다.\n네트워크 상태를 확인해주세요!',
      );
      // dispatch(reportError('startReservation', String(err)))
      return false;
    }
  };
};
