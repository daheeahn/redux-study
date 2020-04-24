import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import NavController from './src/screens/NavController';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {setIsLoggedin} from './src/store';

const App = ({isLoggedin, setIsLoggedin}) => {
  const {getItem, setItem} = useAsyncStorage('isLoggedin');

  const preLoad = async () => {
    AsyncStorage.clear();
    const isLoggedInFS = await getItem();
    if (isLoggedInFS === null || isLoggedInFS === 'false') {
      setIsLoggedin(false);
    } else {
      setIsLoggedin(true);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return isLoggedin !== null ? <NavController /> : <Text>Splash</Text>;
};

const mapStateToProps = state => {
  return {
    isLoggedin: state.isLoggedin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsLoggedin: isLoggedin => {
      dispatch(setIsLoggedin(isLoggedin));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
