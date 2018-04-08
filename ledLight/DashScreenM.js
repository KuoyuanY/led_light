import React, {Component} from 'react';
import {AsyncStorage, Alert, Button, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ColorWheel } from 'react-native-color-wheel';
import Wallpaper from './Wallpaper';


export default class DashScreenM extends React.Component {
    render(){
        return (
            <Wallpaper>
            <FlatList
              data={[
                {key: 'LED Strip 1'},
              ]}
              renderItem={({item}) => <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Led');
              }}>
              <View style={styles.buttonContainer}>
                <Text style= {styles.buttonText}>Use {item}</Text>
              </View>
              </TouchableOpacity>
              }
            />
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
