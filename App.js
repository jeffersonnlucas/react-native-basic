import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ""
    };

    this.getText = this.getText.bind(this);
  }

  getText(text) {
    if (text.length > 0) {
      this.setState({ nome: "Bem vindo: " + text });
    } else {
      this.setState({ nome: '' });
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome."
          underlineColorAndroid='transparent'
          onChangeText={this.getText} />

        <Text style={styles.text}>
          {this.state.nome}
        </Text>
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
