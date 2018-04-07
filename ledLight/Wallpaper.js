import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image, View} from 'react-native';



export default class Wallpaper extends Component {
  render() {
  	let pic = {
      uri: 'http://bennettfeely.com/gradients/img/gradient_24.png'
    };
    return (
	      <Image style={styles.picture} source={pic}>
	        {this.props.children}
	      </Image>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
