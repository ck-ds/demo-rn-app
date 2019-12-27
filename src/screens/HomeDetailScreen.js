import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Components
import HeaderComponent from '../components/HeaderComponent';

// Icons
import ic_home from '../assets/icons/ic_home.png';

export default class HomeDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent
          title="Home Detail"
          nav={this.props.navigation}
          icon={ic_home}
        />

        <View style={styles.contentContainer}>
          <Text onPress={this.handleTextPress} style={styles.text}>
            HomeDetailScreen
          </Text>
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
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
});
