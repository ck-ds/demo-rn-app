import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  handleTextPress = () => {
    this.props.navigation.push('HomeDetail');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.handleTextPress} style={styles.text}>
          HomeScreen
        </Text>
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
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
});
