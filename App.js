import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import {connect, useDispatch} from 'react-redux';
import {setIsLoggedin} from './src/store';
import NavController from './src/screens/NavController';

const App = ({setIsLoggedin, isLoggedin}) => {
  const {getItem, setItem} = useAsyncStorage('isLoggedin');
  // const dispatch = useDispatch();

  const preLoad = async () => {
    // TODO: 로그인 여부 확인
    const isLoggedinFS = await getItem();
    if (isLoggedinFS === null || isLoggedinFS === 'false') {
      console.log('없음');
      setIsLoggedin(true); // TODO: 바꾸기
    } else {
      console.log('있음');
      setIsLoggedin(true);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return isLoggedin !== null ? (
    // TODO: 로그인 여부의 체크 여부 확인 후 NavController or Splash
    <NavController />
  ) : (
    <Text>Splash...</Text>
  );
};

const mapStateToProps = state => {
  return {
    // TODO: 필요한 state 정의
    isLoggedin: state.isLoggedin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // TODO: 필요한 dispatch 정의
    setIsLoggedin: isLoggedin => dispatch(setIsLoggedin(isLoggedin)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
