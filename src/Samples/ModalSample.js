import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';
import Entrar from '../View/Entrar';

class ModalSample extends Component {
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
        <Button title="Exibir" onPress={() => this.modal(true)} />

        <Modal transparent={true} animated="fade" visible={this.state.modalVisivel}>
          <View style={{margin: 15, flex: 1, justifyContent: 'center'}}>
            <Entrar modal={() => this.modal(false)} />
          </View>
        </Modal>
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

export default ModalSample;