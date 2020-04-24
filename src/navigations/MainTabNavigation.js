import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FriendStackNavigation from './tabs/FriendStackNavigation';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FriendStackNavigation"
        component={FriendStackNavigation}
      />
    </Tab.Navigator>
  );
};
