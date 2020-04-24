import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product from '../../screens/tabs/Product';
import Detail from '../../screens/tabs/Detail';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
