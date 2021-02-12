import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.background1}></View>
        <View style={styles.background2}></View>
        <View style={styles.background3}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background1: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  },
  background2:{
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  background3:{
    width: 50,
    height: 50,
    backgroundColor: 'yellow'
  }
});
