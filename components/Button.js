import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={[
        {margin: 12, padding: 12, backgroundColor: '#006699', borderRadius: 4},
      ]}
      onPress={onPress}>
      <Text style={{textAlign: 'center', color: 'white'}}>
        {title.toLowerCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
