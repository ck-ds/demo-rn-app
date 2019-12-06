import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Components
import BoxStateLessComponent from '../components/BoxStateLessComponent';
import BoxStateFullComponent from '../components/BoxStateFullComponent';

export default class PropsStateComponentDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BoxStateLessComponent color="red" title="Red" />
        <BoxStateLessComponent color="green" title="Green" />
        <BoxStateFullComponent color="blue" title="Blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
