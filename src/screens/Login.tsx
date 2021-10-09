import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StatusBar, View} from 'react-native';
import Button from '../components/Button';

function Login() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{minHeight: Dimensions.get('screen').height - 75}}>
        <Button title="Register" onPress={() => {}} />
      </View>
    </>
  );
}

export default Login;
