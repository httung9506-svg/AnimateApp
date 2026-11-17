
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default function AnimatedMessage({ visible }) {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.message,
        {
          transform: [{ scale: scale }],
        },
      ]}
    >
      <Text style={styles.text}>
        Chúc mừng! Bạn đã hoàn thành mục tiêu!
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#eeeeee',
    padding: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: '#222222',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
