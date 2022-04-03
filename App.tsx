import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      This is your Sample Page
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10
  },
});
