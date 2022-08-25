import React from 'react';
import {store} from './MyApp/Store';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './MyApp/Navigator/StackNavigator';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
