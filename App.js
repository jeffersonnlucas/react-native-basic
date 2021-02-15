import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import FlatListComponent from './src/components/FlatListComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatListComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;