import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreenName} from '../../Constants/ScreenName';
import HomeScreen from '../../Containers/Home';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name={HomeScreenName}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
