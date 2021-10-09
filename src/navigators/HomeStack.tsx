import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail/Detail';
import UserList from '../screens/UserList';
import {HomeStackParamList} from '../types/navigations';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
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
            colors={['#4158D0', '#C850C0']}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
        ),
      }}>
      <Stack.Screen options={{}} name="User List" component={UserList} />
      <Stack.Screen name="User detail" component={Detail} />
    </Stack.Navigator>
  );
}
