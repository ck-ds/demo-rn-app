import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Images
import login_background_image from '../assets/images/login_background_image.png';
import logo from '../assets/images/logo.png';

export default class LoginScreen extends Component {
  handleSignUp = () => {
    console.log('SignUp button pressed');
  };

  render() {
    return (
      <ImageBackground
        source={login_background_image}
        resizeMode="cover"
        style={styles.backgroundImageContainer}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.contentContainer}>
          <Image source={logo} resizeMode="cover" style={styles.logo} />

          <View style={styles.formContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Username"
              placeholderTextColor="gray"
            />

            <TextInput
              style={styles.inputField}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.signUpTextContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <Text
                style={[styles.signUpText, styles.signUpTitle]}
                onPress={this.handleSignUp}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 64,
    alignSelf: 'center',
    marginTop: -120,
  },
  formContainer: {
    marginTop: 70,
    marginHorizontal: '8%',
  },
  inputField: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    paddingLeft: 20,
  },
  loginButton: {
    height: 40,
    backgroundColor: '#ea4f6f',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  signUpTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});
