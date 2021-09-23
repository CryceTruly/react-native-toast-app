import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {Dimensions, View} from 'react-native';
import Button from '../components/Button';
import toast from '../helpers/toast';

function Detail({navigation}) {
  useFocusEffect(
    useCallback(() => {
      return () => {
        toast.info({message: 'You left me'});
      };
    }, []),
  );

  return (
    <View
      style={{padding: 20, minHeight: Dimensions.get('screen').height - 75}}>
      <Button
        style={{}}
        title="Go back"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

export default Detail;
