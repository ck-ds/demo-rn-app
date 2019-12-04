import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const UserListItemComponent = props => {
  const {picture, name, phone} = props.item;

  const {medium: avatar} = picture;

  const {title, first, last} = name;
  const fullName = title + ' ' + first + ' ' + last;

  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} resizeMode="cover" style={styles.avatar} />

      <View style={styles.infoContainer}>
        <Text style={styles.info}>{fullName}</Text>
        <Text style={styles.info}>{phone}</Text>
      </View>
    </View>
  );
};

export default UserListItemComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  info: {
    color: '#000',
    fontSize: 16,
  },
});
