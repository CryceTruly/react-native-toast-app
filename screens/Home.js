import React from 'react';
import {Dimensions, Platform, View} from 'react-native';
import Button from '../components/Button';
import toast from '../helpers/toast';

function Home({navigation}) {
  return (
    <View style={{minHeight: Dimensions.get('screen').height - 75}}>
      <Button
        style={{}}
        title="SHOW SUCCESS"
        onPress={() => {
          toast.success({message: 'WORKS', duration: 10000});
        }}
      />
      <Button
        title="SHOW ERROR"
        onPress={() => {
          toast.danger({message: 'An error occurred'});
        }}
      />
      <Button title="SHOW INFO" onPress={() => {}} />

      {Platform.OS === 'android' && (
        <Button
          title="USE NATIVE TOAST"
          onPress={() => {
            toast.info({message: 'Am native lol', useNativeToast: true});
          }}
        />
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
