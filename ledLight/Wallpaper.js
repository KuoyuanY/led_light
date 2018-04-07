import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image, View, ImageBackground} from 'react-native';



export default class Wallpaper extends Component {
  render() {
  	let pic = {
      uri: 'http://bennettfeely.com/gradients/img/gradient_24.png'
    };
    return (
    	<View style= {{flex:1}}>
	      <ImageBackground style={styles.picture} source={pic}>
	        {this.props.children}
	      </ImageBackground>
	     </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    // resizeMode: 'cover',
  },
});
