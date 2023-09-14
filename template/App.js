import React, {Suspense} from 'react';
import {store} from './MyApp/Store';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import MyDrawer from './MyApp/Navigator/Drawer';
import {ActivityIndicator} from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Suspense fallback={<ActivityIndicator />}>
          <MyDrawer />
        </Suspense>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
