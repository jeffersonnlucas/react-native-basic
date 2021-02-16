import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class FormInputSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            input: ""
        };

        this.signin = this.signin.bind(this);
    }

    signin() {
        if (this.state.input == '') {
            alert('Digite seu nome!');
            return
        }

        this.setState({ nome: 'Bem vindo: ' + this.state.input })
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome."
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ input: text })} />

                <Button title="Entrar" onPress={this.signin} />

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

export default FormInputSample;