import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HttpRequestSample from './src/samples/HttpRequestSample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
      return(
        <View style={styles.container}>
          <HttpRequestSample />
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