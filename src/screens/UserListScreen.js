import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';

// Components
import UserListItemComponent from '../components/UserListItemComponent';

// Data
import {users} from '../api/Users';

export default class UserListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      users: null,
      status: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const {results} = users;
      this.setState({isLoading: false, users: results, status: null});
    }, 3000);
  }

  renderItem = ({item}) => <UserListItemComponent item={item} />;

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {isLoading, users, status} = this.state;

    if (isLoading) {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Fetching users...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.itemSeparator}
          contentContainerStyle={styles.listContentContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACACAC',
  },
  separator: {
    height: 8,
  },
  listContentContainer: {
    padding: 8,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#000',
    fontSize: 16,
  },
});
