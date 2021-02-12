import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.input} />

        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  }
});
