import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '../TabsNavigator';
import {TabNavigatorScreen} from '../../Constants/ScreenName';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="TabNavigator">
      <Drawer.Screen
        name={TabNavigatorScreen}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
