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

const colors = {
  info: '#343a40',
  success: '#28a745',
  danger: '#dc3545',
};

const Toast = () => {
  const [messageType, setMessageType] = useState(null);
  const timeOutRef = useRef(null);

  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedOpacity.value,
    };
  }, []);

  const [timeOutDuration, setTimeOutDuration] = useState(5000);

  const [message, setMessage] = useState(null);

  const onNewToast = data => {
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
    clearInterval(timeOutRef.current);
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
      clearInterval(timeOutRef.current);
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
        {
          position: 'absolute',
          bottom: '4%',
          left: '4%',
          right: '4%',
          backgroundColor: colors[messageType],
          zIndex: 1,
          elevation: 1,
          borderRadius: 4,
        },
        animatedStyle,
      ]}>
      <TouchableOpacity onPress={closeToast}>
        <Text
          style={{
            padding: 14,
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}>
          {message}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Toast;
