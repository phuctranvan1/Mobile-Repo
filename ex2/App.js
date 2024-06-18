import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const App = () => {
  const handleButtonPress = () => {
    Alert.alert('Hello!');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={handleButtonPress}
        color="#841584"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default App;