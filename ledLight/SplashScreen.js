import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Util } from 'expo';
import Loader from 'react-native-mask-loader';
import HomeScreen from './HomeScreen';


export default class SplashScreen extends React.Component<{}, State> {
  state = {
     appReady: false,
     rootKey: Math.random(),
   };
   constructor() {
     super();

     this._image = require('./assets/BitLED_LOGO.png');
   }

   componentDidMount() {
     this.resetAnimation();
   }

   resetAnimation() {
     this.setState({
       appReady: false,
       rootKey: Math.random()
     });

     setTimeout(() => {
       this.setState({
         appReady: true,
       });
     }, 1000);
   }

   render() {
    return (
      <View key={this.state.rootKey} style={styles.root}>
        <Loader
          isLoaded={this.state.appReady}
          imageSource={this._image}
          backgroundStyle={styles.loadingBackgroundStyle}
        >
          <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.buttonContainer}>
              <Text style= {styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
          </View>
        </Loader>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   root: {
     flex: 1,
   },
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
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

   loadingBackgroundStyle: {
     backgroundColor: 'rgba(32, 186, 148, 1)',
   },
 });
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() =>
//           navigate('Profile', { name: 'Jane' })
//         }
//       />
//     );
//   }
