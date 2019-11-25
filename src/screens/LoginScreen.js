import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

// Images
import login_background_image from '../assets/images/login_background_image.png';
import logo from '../assets/images/logo.png';

export default class LoginScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={login_background_image}
        resizeMode="cover"
        style={styles.backgroundImageContainer}>
        <Text style={styles.title}>Login</Text>

        <Image source={logo} resizeMode="cover" style={styles.logo} />

        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="User Name"
            placeholderTextColor="gray"
          />

          <TextInput
            style={styles.inputField}
            placeholder="User Name"
            placeholderTextColor="gray"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  logo: {
    width: 220,
    height: 64,
    marginTop: 50,
  },
  formContainer: {
    width: '80%',
    marginTop: 60,
    marginHorizontal: '10%',
    borderWidth: 1,
    borderColor: 'red',
  },
  inputField: {
    height: 40,
    backgroundColor: '#fff',
    color: 'blue',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 20,
  },
});
