import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DashScreen from './DashScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Text>asdasfgfognsdkl</Text>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'purple'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
//       </View>

//     );
//   }
// }

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Dashboard: {
      screen: DashScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Splash: {
      screen: SplashScreen,
    },
  },
  {
    initialRouteName: 'Splash',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }

}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
