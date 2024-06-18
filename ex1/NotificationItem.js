import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationItem = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.content}>{item.content}</Text>
    <Text style={styles.timestamp}>{item.timestamp}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
});

export default NotificationItem;