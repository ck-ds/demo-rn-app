import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class MyFirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer1}>
          <Text style={styles.text}>Block 1</Text>
        </View>

        <View style={styles.contentContainer2}>
          <Text style={styles.text}>Block 2</Text>
        </View>

        <View style={styles.contentContainer1}>
          <Text style={styles.text}>Block 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  contentContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  contentContainer2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
