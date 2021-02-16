import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Entrar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={{ backgroundColor: '#292929', width: '100%', height: 350,
            borderRadius: 25 }}>
                <Text style={{ color: '#fff', fontSize: 28, textAlign: 'center' }}>Seja bem vindo</Text>
                <Button title="Fechar" onPress={this.props.modal} />
            </View>

        );
    }
}

export default Entrar;