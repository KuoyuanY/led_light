import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DashScreen from './DashScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import LedScreen from './LedScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Led: {
      screen: LedScreen,
    },
    Dashboard: {
      screen: DashScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }

}
