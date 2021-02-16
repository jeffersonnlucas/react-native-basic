import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Slider from "@react-native-community/slider";

/**
 * https://github.com/callstack/react-native-slider
 * 
 * yarn add @react-native-community/slider
 */
class SliderSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 35
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={30}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          value={this.state.valor}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#00ff00"
        />

        <Text style={{textAlign: 'center', fontSize: 30}}>
          Você tem {this.state.valor.toFixed(0)}Kg
        </Text>
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

export default SliderSample;