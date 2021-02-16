import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

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