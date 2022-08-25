import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDrawerScreen} from '../../Constants/ScreenName';
import MyDrawer from '../Drawer';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={MyDrawerScreen}
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Navigator;
