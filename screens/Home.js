import React from 'react';
import {Dimensions, Platform, View} from 'react-native';
import Button from '../components/Button';

function Home({navigation}) {
  return (
    <View style={{minHeight: Dimensions.get('screen').height - 75}}>
      <Button style={{}} title="SHOW SUCCESS" onPress={() => {}} />
      <Button title="SHOW ERROR" onPress={() => {}} />
      <Button title="SHOW INFO" onPress={() => {}} />

      {Platform.OS === 'android' && (
        <Button title="USE NATIVE TOAST" onPress={() => {}} />
      )}

      <Button title="TAKE 10 s" onPress={() => {}} />

      <Button
        title="GO TO DETAIL"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
}

export default Home;
