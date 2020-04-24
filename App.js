import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import {connect} from 'react-redux';

const App = ({}) => {
  const preLoad = async () => {
    // TODO: 로그인 여부 확인
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    // TODO: 로그인 여부의 체크 여부 확인 후 NavController or Splash
    <Text>App</Text>
  );
};

const mapStateToProps = state => {
  return {
    // TODO: 필요한 state 정의
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // TODO: 필요한 dispatch 정의
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
