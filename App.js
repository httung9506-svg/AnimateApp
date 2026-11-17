
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ProgressCard from './ProgressCard';
import ActionButton from './ActionButton';
import AnimatedMessage from './AnimatedMessage';

export default function App() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setCompleted(false);
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MỤC TIÊU HỌC TẬP</Text>

      <Text style={styles.subtitle}>
        Theo dõi quá trình học tập của bạn
      </Text>

      <ProgressCard
        started={started}
        completed={completed}
      />

      <ActionButton
        onPress={handleStart}
        title="Bắt đầu học"
      />

      {started && (
        <ActionButton
          onPress={handleComplete}
          title="Hoàn thành"
        />
      )}

      <AnimatedMessage visible={completed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
  },
  subtitle: {
    fontSize: 15,
    color: '#777777',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});
