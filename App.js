import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SliderSample from './src/Samples/SliderSample';

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
        <SliderSample />
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