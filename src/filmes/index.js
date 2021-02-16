import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

class Filmes extends Component {
    render() {
        const { nome, foto, sinopse } = this.props.data;

        return (
            <View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Image
                        source={{ uri: foto }}
                        style={styles.capa}
                    />

                    <View style={styles.btnArea}>
                        <TouchableOpacity style={styles.btn} onPress={() => alert(sinopse)}>
                            <Text style={styles.btnText}>
                                Leia mais ...
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3
    },
    titulo: {
        fontSize: 18,
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    capa: {
        height: 250,
        resizeMode: 'stretch',
        zIndex: 2,
        borderTopRightRadius: 1.3,
        borderTopLeftRadius: 1.3
    },
    btnArea: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    btn: {
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },
    btnText: {
        textAlign: 'center',
        color: '#FFF',
    },
    modal: {
        margin: 15,
        flex: 1,
        justifyContent: 'center'
    }
});

export default Filmes;