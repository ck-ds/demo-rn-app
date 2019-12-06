import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class BoxStateFullComponent extends Component {
  constructor(props) {
    super(props);

    const {color, title} = this.props;

    this.state = {
      color,
      title,
    };
  }

  handleTap = () => {
    const {color} = this.state;

    if (color === 'black') {
      this.setState({color: 'red', title: 'Red'});
    } else {
      this.setState({color: 'black', title: 'Black'});
    }
  };

  render() {
    const {color, title} = this.state;

    const containerColorStyle = {
      backgroundColor: color,
    };

    return (
      <TouchableOpacity
        style={[styles.container, containerColorStyle]}
        onPress={this.handleTap}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

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
