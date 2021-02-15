import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Pessoas from "../Pessoas";

class FlatListSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {
                    id: 1,
                    nome: 'Jeffersonn',
                    idade: 30,
                    email: 'jeffersonn@jeffersonn.com'
                },
                {
                    id: 2,
                    nome: 'Jurema',
                    idade: 25,
                    email: 'jurema@jurema.com'
                },
                {
                    id: 3,
                    nome: 'Jose',
                    idade: 13,
                    email: 'jose@jose.com'
                },
                {
                    id: 4,
                    nome: 'Creusa',
                    idade: 22,
                    email: 'creusa@creusa.com'
                },
                {
                    id: 5,
                    nome: 'Tiquinho',
                    idade: 48,
                    email: 'tiquinho@tiquinho.com'
                },
            ]
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.feed}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Pessoas data={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FlatListSample;