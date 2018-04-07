import React, {Component} from 'react';
import { Alert, Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Wallpaper from './Wallpaper';
import LoginScreen from './LoginScreen';

export default class HomeScreen extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <Wallpaper>
        <View style={styles.buttonContainer}>
          <Button 
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
      </Wallpaper>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    height: 50,
    backgroundColor: "white",
    justifyContent: 'center'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

