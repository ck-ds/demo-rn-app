import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Components
import HeaderComponent from '../components/HeaderComponent';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Sign Up" nav={this.props.navigation} />

        <View style={styles.contentContainer}>
          <Text style={styles.text}>SignUpScreen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
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
