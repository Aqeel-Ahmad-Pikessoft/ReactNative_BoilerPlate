import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigator from '../StackNavigator';
import {NavigatorScreen} from '../../Constants/ScreenName';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NavigatorScreen}
        component={Navigator}
        options={{headerShown: false, tabBarStyle: {display: 'none'}}} // enble bottom tab when needed
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
