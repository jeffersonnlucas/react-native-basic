import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            nome: ''
        };

        this.gravarNome = this.gravarNome.bind(this);
    };

    //ComponentDidMount - Quando o componente é montado na tela ele executa essa função
    async componentDidMount() {
        await AsyncStorage.getItem('nome').then((value) => {
            this.setState({
                nome: value
            });
        });
    }

    //ComponentDidUpdate - Monitora toda vez que  um state é atualizado.
    async componentDidUpdate(_, prevState) {
        const nome = this.state.nome;

        if (prevState !== nome) {
            await AsyncStorage.setItem('nome', nome);
        }
    }

    gravarNome() {
        this.setState({
            nome: this.state.input
        });

        alert('Salvo com sucesso');
        Keyboard.dismiss();
    }

    render() {
        return (
            <>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.input}
                        value={this.state.input}
                        onChangeText={(text) => this.setState({ input: text })}
                        underlineColorAndroid="transparent"
                    />

                    <TouchableOpacity onPress={this.gravarNome}>
                        <Text style={styles.btn}>
                            +
          </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.nome}>{this.state.nome}</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: 350,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10
    },
    btn: {
        backgroundColor: '#0A0',
        color: '#FFF',
        height: 40,
        padding: 10,
        marginLeft: 4
    },
    nome: {
        marginTop: 15,
        fontSize: 30,
        textAlign: 'center'
    }
});

export default AsyncStorageSample;