import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Bubbles} from 'react-native-loader';

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
      isRefreshing: false,
    };
  }

  componentDidMount() {
    const task = () => {
      const {results} = users;
      this.setState({users: results, status: null, isLoading: false});
    };

    setTimeout(task, 3000);
  }

  renderItem = ({item}) => <UserListItemComponent item={item} />;

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  handleUserListRefresh = () => {
    this.setState({isRefreshing: true});

    const task = () => {
      const {results} = users;
      this.setState({users: results, status: null, isRefreshing: false});
    };

    setTimeout(task, 2000);
  };

  render() {
    const {isLoading, users, status, isRefreshing} = this.state;

    if (isLoading) {
      return (
        <View style={styles.messageContainer}>
          {/* <Text style={styles.message}>Fetching users...</Text> */}
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          <Bubbles size={10} color="blue" />
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
          refreshing={isRefreshing}
          onRefresh={this.handleUserListRefresh}
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
