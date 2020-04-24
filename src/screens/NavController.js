import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import MainTabNavigation from '../navigations/MainTabNavigation';
import AuthStackNavigation from '../navigations/AuthStackNavigation';
import {NavigationContainer} from '@react-navigation/native';

const NavController = ({isLoggedin}) => {
  return (
    <NavigationContainer>
      {isLoggedin ? <MainTabNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isLoggedin: state.isLoggedin,
});

export default connect(mapStateToProps)(NavController);
