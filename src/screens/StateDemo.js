import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class StateDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };

    console.log('constructor');
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');

    const todo = () => {
      this.setState({counter: this.state.counter + 1});
    };

    // setTimeout(todo, 500);
    setInterval(todo, 1000);
  }

  render() {
    console.log('render');
    const {counter} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{counter}</Text>
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
    color: 'blue',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
