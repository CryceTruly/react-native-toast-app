import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {Dimensions, View} from 'react-native';
import Button from '../components/Button';

function Detail({navigation}) {
  useFocusEffect(useCallback(() => {}, []));

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
