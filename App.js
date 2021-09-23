import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigators/MainStack';
import Toast from './components/Toast';

const App = () => {
  return (
    <>
      <Toast />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
};

export default App;
