import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Wallpaper from './Wallpaper';
import DashScreen from './DashScreen';

export default class LoginScreen extends React.Component {

	 static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <Wallpaper>
      	<View>
      		<Text>"dfs" </Text>
      	</View>
      </Wallpaper>
    );
  }
}

