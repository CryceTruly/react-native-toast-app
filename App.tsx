import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from './src/components/Toast';
import HomeStack from './src/navigators/HomeStack';
import AuthStack from './src/navigators/AuthStack';
import {navigationRef} from './src/navigators/RootNavigator';

const App = () => {
  const isLoggedIn = true;
  return (
    <>
      <Toast />
      <NavigationContainer ref={navigationRef}>
        {isLoggedIn ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default App;

// How to type the navigators
// How to type the navigate function
// How to type the useRoute hook
// How to type the navigation container ref.+ custom Root navigator functions
