import React, {Component} from 'react';
import {AsyncStorage, Alert, Button, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ColorWheel } from 'react-native-color-wheel';
import Wallpaper from './Wallpaper';


export default class DashScreenM extends React.Component {
    async userLogout() {
        try {
            await AsyncStorage.removeItem('username');
            Alert.alert('Logout Success!');
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }
    static navigationOptions = {
        title: 'LED Strips',
        headerStyle: {
            backgroundColor: '#ffffff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render(){
        return (
            <Wallpaper>
            <Button
            onPress={() =>{
                this.userLogout();
                this.props.navigation.navigate('Home');
            }}
            title="Log off"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
            <FlatList
            data={[
                {key: 'Main Strip'},
            ]}
            renderItem={({item}) =>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Led');
            }}>
            <View style={styles.buttonContainer}>
            <Text style= {styles.buttonText}>{item.key}</Text>
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
    logoutcontainer: {
        ...StyleSheet.absoluteFillObject,
        alignSelf: 'flex-end',
        marginTop: -5,
        position: 'absolute', // add if dont work with above
    },
    buttonContainer: {
        marginTop: 10,
        // marginLeft: 50,
        // marginRight: 50,
        height: 50,
        backgroundColor: "white",
        justifyContent: 'center',
        // borderRadius: 25,
    },
    logo: {
        width: 193,
        height: 110,

    }
})
