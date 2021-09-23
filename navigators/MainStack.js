import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
