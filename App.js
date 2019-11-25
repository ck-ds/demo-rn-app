import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Screens
// import MyFirstScreen from './src/screens/MyFirstScreen';
import LoginScreen from './src/screens/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
