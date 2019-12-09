import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SignUpScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: '500',
  },
});
