import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Text,
  DeviceEventEmitter,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from 'react-native';
import {SHOW_TOAST_MESSAGE} from '../constants/toast';

import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import toastStyles from './toastStyles';

type Colors = {
  info: string;
  success: string;
  danger: string;
};
const colors = {
  info: '#343a40',
  success: '#28a745',
  danger: '#dc3545',
} as Colors;

type ToastData = {
  useNativeToast?: boolean;
  message: string;
  duration?: number;
  type: keyof Colors;
};

const Toast = () => {
  const [messageType, setMessageType] = useState<null | keyof Colors>(null);
  const timeOutRef = useRef<null | NodeJS.Timer>(null);

  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedOpacity.value,
    };
  }, []);

  const [timeOutDuration, setTimeOutDuration] = useState(5000);

  const [message, setMessage] = useState<null | string>(null);

  const onNewToast = (data: ToastData) => {
    if (Platform.OS === 'android' && data.useNativeToast) {
      return ToastAndroid.show(data.message, ToastAndroid.LONG);
    }
    if (data.duration) {
      setTimeOutDuration(data.duration);
    }
    setMessage(data.message);
    setMessageType(data.type);
  };

  const closeToast = useCallback(() => {
    setMessage(null);
    setTimeOutDuration(5000);
    animatedOpacity.value = withTiming(0);
    clearInterval(timeOutRef.current as NodeJS.Timeout);
  }, [animatedOpacity]);

  useEffect(() => {
    if (message) {
      timeOutRef.current = setInterval(() => {
        if (timeOutDuration === 0) {
          closeToast();
        } else {
          setTimeOutDuration(prev => prev - 1000);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timeOutRef.current as NodeJS.Timeout);
    };
  }, [closeToast, message, timeOutDuration]);

  useEffect(() => {
    if (message) {
      animatedOpacity.value = withTiming(1, {duration: 1000});
    }
  }, [message, animatedOpacity]);

  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) {
    return null;
  }

  return (
    <Animated.View
      style={[
        toastStyles.wrapper,
        {backgroundColor: messageType ? colors[messageType] : 'blue'},
        animatedStyle,
      ]}>
      <TouchableOpacity onPress={closeToast}>
        <Text style={toastStyles.text}>{message}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Toast;
