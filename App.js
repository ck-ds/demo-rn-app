import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';

// Screens
import MyFirstScreen from './src/screens/MyFirstScreen';
import StateDemo from './src/screens/StateDemo';
import LoginScreen from './src/screens/LoginScreen';
import UserListScreen from './src/screens/UserListScreen';
import PropsStateComponentDemo from './src/screens/PropsStateComponentDemo';

// Root Navigator
import {createRootNavigator} from './src/routes/Routes';

export default class App extends Component {
  render() {
    const RootNavigator = createRootNavigator(false);
    const AppContainer = createAppContainer(RootNavigator);

    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
