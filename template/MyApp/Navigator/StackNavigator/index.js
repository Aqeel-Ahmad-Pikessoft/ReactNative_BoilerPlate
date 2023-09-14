import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreenName} from '../../Constants/ScreenName';
import HomeScreen from '../../Containers/Home';
import {TouchableOpacity} from 'react-native';
import {DrawerIcon} from '../../Constants/AppIcons';

const Stack = createStackNavigator();

const CustomDrawerIcon = ({navigation}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.toggleDrawer();
    }}
    style={{marginLeft: 10}}>
    {DrawerIcon}
  </TouchableOpacity>
);

const Navigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={HomeScreenName}
          component={HomeScreen}
          options={({navigation}) => ({
            headerShown: false, //true when add item in drawer
            title: null,
            headerLeft: () => <CustomDrawerIcon navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default Navigator;
