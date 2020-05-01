import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {increase, decrease, State} from '../../store';

export default ({}) => {
  const count = useSelector((state: State) => state.count, shallowEqual); // 구 mapStateToProps
  const token = useSelector((state: State) => state.token, shallowEqual); // 구 mapStateToProps
  const dispatch = useDispatch(); // 구 mapDispatchToProps

  const add = () => dispatch(increase());
  const minus = () => dispatch(decrease());

  return (
    <SafeAreaView>
      <Text>{count}</Text>
      <Button
        title={'add'}
        onPress={() => {
          // dispatch(increase());
          add();
        }}
      />
      <Button
        title={'minus'}
        onPress={() => {
          minus();
        }}
      />
    </SafeAreaView>
  );
};
