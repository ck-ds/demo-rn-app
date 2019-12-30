import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';

// firebase
import firebase from 'react-native-firebase';

// Screens
import MyFirstScreen from './src/screens/MyFirstScreen';
import StateDemo from './src/screens/StateDemo';
import LoginScreen from './src/screens/LoginScreen';
import UserListScreen from './src/screens/UserListScreen';
import PropsStateComponentDemo from './src/screens/PropsStateComponentDemo';

// Root Navigator
import {createRootNavigator} from './src/routes/Routes';

export default class App extends Component {
  componentDidMount() {
    this.checkPermission();
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();

    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async getToken() {
    console.log('fetching token...');

    // let fcmToken = await AsyncStorage.getItem('fcmToken');

    // if (!fcmToken) {
    //   fcmToken = await firebase.messaging().getToken();
    //   if (fcmToken) {
    //     // user has a device token
    //     await AsyncStorage.setItem('fcmToken', fcmToken);
    //   }
    // }
  }

  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorized
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

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
