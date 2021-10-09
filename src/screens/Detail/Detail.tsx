import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {Image, View} from 'react-native';
import toast from '../../helpers/toast';
import {HomeStackParamList} from '../../types/navigations';
import styles from './styles';

type detailScreenRouteType = RouteProp<HomeStackParamList, 'User detail'>;

function Detail() {
  const {setOptions} = useNavigation();
  const {
    params: {image, name},
  } = useRoute<detailScreenRouteType>();

  useFocusEffect(
    useCallback(() => {
      setOptions({title: name});
      return () => {
        toast.info({message: 'You left this here'});
      };
    }, [name, setOptions]),
  );

  return (
    <View style={styles.wrapper}>
      <Image source={{uri: image}} style={styles.img} />
    </View>
  );
}

export default Detail;
