import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const ProcessingLoader = () => (
  <View style={styles.modalContainer}>
    <ActivityIndicator size="large" color="#fff" />
  </View>
);

export default ProcessingLoader;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
