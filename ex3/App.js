import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, styles.redSquare]}>
        <Text style={styles.text}>Square 1</Text>
      </View>
      <View style={[styles.square, styles.greenSquare]}>
        <Text style={styles.text}>Square 2</Text>
      </View>
      <View style={[styles.square, styles.blueSquare]}>
        <Text style={styles.text}>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redSquare: {
    backgroundColor: 'red',
  },
  
  greenSquare: {
    backgroundColor: 'green',
  },
  blueSquare: {
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;