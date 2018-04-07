import React, {Component} from 'react';
import { Alert, Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Wallpaper from './Wallpaper';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

export default class HomeScreen extends React.Component {

  // _onPressButton() {
  //   this.props.navigation.navigate('Login')
  // }

  render() {
    return (
      <Wallpaper>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image source = {{uri: "https://assets.corusent.com/wp-content/uploads/2018/01/logo_tv_disney_en_jan2018-500x250.png"}} style={styles.logo}/>
          </View>
          <View>
            <Text style={styles.title}>"LED Lights"</Text>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.buttonContainer}>
              <Text style= {styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.buttonContainer}>
              <Text style= {styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
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
  title: {
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  buttonText: {
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  buttonContainer: {
    margin: 10,
    height: 50,
    backgroundColor: "white",
    justifyContent: 'center',
    borderRadius: 25,
  },
  logo: {
    width: 193, 
    height: 110,

  }
})

