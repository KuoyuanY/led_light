import React, {Component} from 'react';
import {AsyncStorage, Alert, Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Wallpaper from './Wallpaper';
import DashScreen from './DashScreen';
import t from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
    username: t.String,
    password: t.String
});

const options = {
    fields: {
        username: {
            error: 'Enter username'
        },
        password: {
            error: 'Enter password'
        },
    },
    stylesheet: formStyles,
};

const formStyles = {
    ...Form.stylesheet,
    controlLabel: {
        normal: {
            color: 'blue',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    }
}

export default class LoginScreen extends React.Component {
    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }
    static navigationOptions = {
        title: 'Log in',
        headerStyle: {
            backgroundColor: '#ffffff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        if(!value){
            return;
        }
        let args = {};
        args.username = value.username;
        args.password = value.password;
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                args
            ),
        })
        .then((response) => {
            if(response._bodyBlob.size == 4){
                //show it failed
                Alert.alert('Wrong username or password');
            } else{
                this.saveItem('username', args.username);
                if(args.username === "Master"){

                }else{
                    this.props.navigation.navigate('Dashboard');
                }

            }
        })
        .catch((error) => {
            console.error(error);
        });
    }



    render() {
        return (
            <Wallpaper>
            <View style={styles.container}>
            <Form
            ref={c => this._form = c}
            type={User}
            options={options} // pass the options via props
            />
            <Button
            title="Log in!"
            onPress={this.handleSubmit}
            />
            </View>
            </Wallpaper>
        );
    }
    /*
    <TouchableOpacity onPress={() => {
    let args = {};
    args.state = "ON";
    args.colorR = colour[0];
    args.colorG = colour[1];
    args.colorB = colour[2];
    args.brightness = 50;
    args.effect = "solid";
    args.switches = "yes";
    args.setCol = "yes";
    args.setBr = "yes";
    fetch('http://localhost:3000/set', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
},
body: JSON.stringify(
args
),
})
.then((response) => response.json())
.then((responseData) => {
console.warn(responseData);
return responseData;
})
.catch(error => console.warn(error));
this.props.navigation.navigate('Dashboard')
}}>
<View style={styles.buttonContainer}>
<Text style= {styles.buttonText}>Log In</Text>
</View>
</TouchableOpacity>
*/

}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});
