import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import store, {SET_IS_LOADED, ADD_COUNT, MINUS_COUNT} from '../store';
import {aaa} from '../actions';
import {connect} from 'react-redux';

const Home = props => {
  console.log('props', props);
  // const isLoaded = props.isLoaded;
  const {isLoaded, count, getApi} = props;

  return (
    <SafeAreaView>
      <Text>isLoaded: {isLoaded ? 'true' : 'false'} </Text>
      <Text>count: {count} </Text>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'lightgreen'}}
        onPress={async () => {
          const result = await getApi();
        }}>
        <Text>Change isLoaded</Text>
      </TouchableOpacity>

      {/* <Text style={{marginTop: 30}}>count: {count} </Text>
      <TouchableOpacity
        style={{width: 100, height: 50, backgroundColor: 'green'}}
        onPress={() => {
          addCount(1);
        }}>
        <Text>Plus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'green',
          marginTop: 5,
        }}
        onPress={() => {
          minusCount(1);
        }}>
        <Text>Minus</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // toggleIsLoaded: isLoaded => {
    //   dispatch({type: SET_IS_LOADED, isLoaded});
    // },
    // addCount: num => {
    //   dispatch({type: ADD_COUNT, num});
    // },
    // minusCount: num => {
    //   dispatch({type: MINUS_COUNT, num});
    // },
    getApi: () => {
      dispatch(aaa());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
