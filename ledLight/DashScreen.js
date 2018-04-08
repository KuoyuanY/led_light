import React, {Component} from 'react';
import {AsyncStorage, Alert, Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ColorWheel } from 'react-native-color-wheel';
import Wallpaper from './Wallpaper';


export default class DashScreen extends React.Component {
    render(){
        return (
            <Wallpaper>
            <TouchableOpacity onPress={() => {
                AsyncStorage.getItem('username').then((username) =>{
                    console.log(username);
                    //query server at localhost:3000/

                });
                //this.props.navigation.navigate('Led');
            }}>
              <View style={styles.buttonContainer}>
                <Text style= {styles.buttonText}>View your led strips </Text>
              </View>
            </TouchableOpacity>
            </Wallpaper>
        );
    };

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
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
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
