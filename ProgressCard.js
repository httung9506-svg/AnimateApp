
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ started, completed }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Mục tiêu hôm nay</Text>

      <Text style={styles.content}>
        Học React Native
      </Text>

      <Text style={styles.progress}>
        {completed ? '100%' : started ? '50%' : '0%'}
      </Text>

      <View style={styles.bar}>
        <View
          style={[
            styles.fill,
            {
              width: completed ? '100%' : started ? '50%' : '0%',
            },
          ]}
        />
      </View>

      <Text style={styles.status}>
        {completed
          ? 'Đã hoàn thành'
          : started
          ? 'Đang thực hiện'
          : 'Chưa bắt đầu'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginTop: 15,
  },
  progress: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  bar: {
    height: 10,
    backgroundColor: '#dddddd',
    borderRadius: 5,
    marginTop: 10,
  },
  fill: {
    height: 10,
    backgroundColor: '#555555',
    borderRadius: 5,
  },
  status: {
    fontSize: 14,
    color: '#666666',
    marginTop: 10,
  },
});
