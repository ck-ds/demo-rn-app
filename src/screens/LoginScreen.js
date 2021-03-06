import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Images
import login_background_image from '../assets/images/login_background_image.png';
import logo from '../assets/images/logo.png';

// Components
import PopupDemoComponent from '../components/PopupDemoComponent';

export default class LoginScreen extends Component {
  // static navigationOptions = {
  //   header: null,
  // };

  constructor(props) {
    super(props);

    this.state = {
      showDemoPopup: false,
      username: '',
      password: '',
    };
  }

  handleUsernameChange = username => {
    this.setState({username});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  handleChangeText = stateKey => changedText => {
    this.setState({[stateKey]: changedText});
  };

  handleLogin = () => {
    this.props.navigation.navigate('LoggedIn');
  };

  handleSignUp = () => {
    this.props.navigation.push('SignUp');
  };

  handleDemoPopup = () => {
    this.setState({showDemoPopup: true});
  };

  closePopup = () => {
    this.setState({showDemoPopup: false});
  };

  render() {
    const {showDemoPopup} = this.state;

    return (
      <ImageBackground
        source={login_background_image}
        resizeMode="cover"
        style={styles.backgroundImageContainer}>
        <Text onPress={this.handleDemoPopup} style={styles.title}>
          Login
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
          // contentContainerStyle={styles.scrollContentContainer}
        >
          <View style={styles.contentContainer}>
            <Image source={logo} resizeMode="cover" style={styles.logo} />

            <View style={styles.formContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Username"
                placeholderTextColor="gray"
                value={this.state.username}
                onChangeText={this.handleChangeText('username')}
              />

              <TextInput
                style={styles.inputField}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                value={this.state.password}
                onChangeText={this.handleChangeText('password')}
                // maxLength={4}
                // keyboardType="number-pad"
              />

              <TouchableOpacity
                onPress={this.handleLogin}
                style={styles.loginButton}>
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
        </ScrollView>

        {showDemoPopup && <PopupDemoComponent closePopup={this.closePopup} />}
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
  scrollContainer: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20,
  },
  // scrollContentContainer: {
  //   justifyContent: 'center',
  // },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 64,
    alignSelf: 'center',
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
    height: hp(5.5),
    backgroundColor: '#ea4f6f',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonTitle: {
    color: '#fff',
    fontSize: wp(4),
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
