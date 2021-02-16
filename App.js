import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ModalSample from './src/Samples/ModalSample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisivel: false
    };

    this.exibir = this.modal.bind(this);
  };

  modal(visivel) {
    this.setState({ modalVisivel: visivel });
  }

  render() {
    return (
      <View style={styles.container}>
        <ModalSample />
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