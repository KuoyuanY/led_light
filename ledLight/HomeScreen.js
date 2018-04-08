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
            <Image source = {{uri: "https://i.imgur.com/YRcuhsH.png"}} style={styles.logo}/>
          </View>
          <View>
            <Text style={styles.title}>Lumify</Text>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.buttonContainer}>
              <Text style= {styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
            <View style={styles.buttonContainer}>
              <Text style= {styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {{marginBottom : 50}}> </View>
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
    marginTop : 30,
    marginBottom : 30,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'Optima-ExtraBlack',
    letterSpacing : 4,
    color : 'white'
  },
  buttonText: {
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  buttonContainer: {
    margin: 10,
    marginTop :10,
    height: 50,
    backgroundColor: "white",
    justifyContent: 'center',
    borderRadius: 25,
  },
  logo: {
    width: 330,
    height: 370,

  }
})
