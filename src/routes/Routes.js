import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Login Screens
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

// Home Screens
import HomeScreen from '../screens/HomeScreen';
import HomeDetailScreen from '../screens/HomeDetailScreen';

// MyOrders Screens
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyOrderDetailScreen from '../screens/MyOrderDetailScreen';

// Profile Screens
import ProfileScreen from '../screens/ProfileScreen';

const LoggedOutNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    HomeDetail: HomeDetailScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const MyOrdersNavigator = createStackNavigator(
  {
    MyOrders: MyOrdersScreen,
    MyOrderDetail: MyOrderDetailScreen,
  },
  {
    initialRouteName: 'MyOrders',
  },
);

const LoggedInNavigator = createSwitchNavigator(
  {
    Home: HomeNavigator,
    MyOrders: MyOrdersNavigator,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export const createRootNavigator = isLoggedIn => {
  const ROUTES = {
    LoggedOut: LoggedOutNavigator,
    LoggedIn: LoggedInNavigator,
  };

  let initialRouteName = 'LoggedOut';

  if (isLoggedIn) {
    initialRouteName = 'LoggedIn';
  }

  return createSwitchNavigator(ROUTES, {initialRouteName});
};
