import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const CustomLoader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0b89bc" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomLoader;
