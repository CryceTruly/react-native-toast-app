import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {AuthStackParamList} from '../types/navigations';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {height: 110},
        headerBackTitleStyle: {display: 'none'},
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: 'avenir',
          fontWeight: '900',
        },
        headerBackground: () => (
          <LinearGradient
            colors={['#180c81', '#1ab6ff']}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
        ),
      }}>
      <Stack.Screen options={{}} name="Login" component={Login} />
      <Stack.Screen name="Create account" component={Register} />
    </Stack.Navigator>
  );
}
