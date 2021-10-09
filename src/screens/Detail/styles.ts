import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    minHeight: Dimensions.get('screen').height - 75,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
