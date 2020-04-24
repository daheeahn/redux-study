import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Friend from '../../screens/tabs/Friend';
import Detail from '../../screens/tabs/Detail';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friend" component={Friend} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
