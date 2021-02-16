import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SwitchSample from './src/Samples/SwitchSample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 35
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <SwitchSample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  }
});

export default App;