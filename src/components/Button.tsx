import React, {FC} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import btnStyles from './btnStyles';

interface Props {
  onPress: () => void;
  title: string;
  variant?: 'red' | 'blue';
  style?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
}

const Button: FC<Props> = ({
  onPress,
  title,
  variant = 'red',
  titleStyle,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[btnStyles.wrapper, {backgroundColor: variant}, style]}
      onPress={onPress}>
      <Text style={[btnStyles.text, titleStyle]}>{title.toLowerCase()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
