import React, {Component} from 'react';
import { Button, View, Text, Dimensions, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ColorWheel } from 'react-native-color-wheel';
import Wallpaper from './Wallpaper';


export default class DashScreen extends React.Component {
    render(){
        return (
            <Wallpaper>
            </Wallpaper>
        );
    };

}
