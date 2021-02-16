import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorageSample from './src/Samples/AsyncStorageSample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  };

  render() {
    return (
      <View style={styles.container}>
        <AsyncStorageSample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  }
});

export default App;