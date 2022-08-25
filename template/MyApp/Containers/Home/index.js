import React, {useEffect} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import {useDispatch, useSelector} from 'react-redux';

import HomeReducer, {HomeRequest} from './slice';
import {HomeSelector} from './selector';
import HomeSaga from './saga';
import styles from './style';

import Background from '../../Assets/Images/background.png';

const HomeScreen = ({navigation}) => {
  useInjectReducer({key: 'home', reducer: HomeReducer});
  useInjectSaga({key: 'home', saga: HomeSaga});

  const dispatch = useDispatch();

  const {Data, loading} = useSelector(HomeSelector);

  const fetchLocationsData = () => {
    dispatch(HomeRequest());
  };

  useEffect(() => {
    fetchLocationsData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackgroundStyle} source={Background}>
        <View style={styles.imageOverlayStyle}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.companyText}>Pikessoft BoilerPlate</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
