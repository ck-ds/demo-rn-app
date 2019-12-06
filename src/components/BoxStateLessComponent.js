import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxStateLessComponent = props => {
  const {color, title} = props;

  const containerColorStyle = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.container, containerColorStyle]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BoxStateLessComponent;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
