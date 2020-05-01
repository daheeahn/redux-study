import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const count = useSelector(state => state.count);
  console.log('count', count);

  return (
    <SafeAreaView>
      <Text>{count}</Text>
    </SafeAreaView>
  );
};

export default Home;
