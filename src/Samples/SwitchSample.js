import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';

class SwitchSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Switch
                    value={this.state.status}
                    onValueChange={(valorSelecionado) => this.setState({ status: valorSelecionado })}
                    thumbColor="#ff0000"
                />

                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    Status {this.state.status ? "ativo :D" : "inativo :("}
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

export default SwitchSample;