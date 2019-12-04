import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Screens
// import MyFirstScreen from './src/screens/MyFirstScreen';
// import StateDemo from './src/screens/StateDemo';
// import LoginScreen from './src/screens/LoginScreen';
import UserListScreen from './src/screens/UserListScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserListScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
