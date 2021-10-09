import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StatusBar, View} from 'react-native';
import Button from '../components/Button';

function Register() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{minHeight: Dimensions.get('screen').height - 75}}>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </>
  );
}

export default Register;
