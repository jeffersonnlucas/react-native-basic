import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import api from "../services/api";
import Filmes from "../filmes";

class HttpRequestSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmes: [],
            loading: true
        };

    };

    async componentDidMount() {
        const response = await api.get('v3/6c2f6ec8-9b45-4531-8579-3c62a6033850');

        this.setState({
            filmes: response.data,
            loading: false
        })
    }

    render() {

        if (this.state.loading) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator color="#09a6ff" size={40} />
                </View>
            );
        } else {
            return (
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.filmes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Filmes data={item} />}
                    />
                </View>
            );
        }
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

export default HttpRequestSample;