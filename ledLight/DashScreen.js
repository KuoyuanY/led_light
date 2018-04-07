import React, {Component} from 'react';
import { Button, View, Text, Dimensions, StyleSheet, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ColorWheel } from 'react-native-color-wheel';
import Wallpaper from './Wallpaper';


export default class DashScreen extends React.Component {

	
  
	constructor(props) {
    	super(props);
    	this.state = {language: ''};

  	}

  	render() {
  		let convert = require('color-convert');
  		// let display = this.state.isShowingText ? this.props.text : ' ';
  
	    return (
	      <Wallpaper>
		      <View style={{flex: 1}}>
		        <ColorWheel
		          initialColor="#000000"
		          onColorChange={color => 
					
					{if (color.h < 0) {
						let colour = convert.hsv.rgb(360-color.h*(-1), color.s, color.v);
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
						});
					} else {
						let colour = convert.hsv.rgb(color.h, color.s, color.v);
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
						});
					}}}
		          style={{width: Dimensions.get('window').width}}
		          thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
		        
		      </View>
		      <View style={{flex: 1}}> 
		      		<Picker
					  selectedValue={this.state.language}
					  style={{ height: 50, width: 100 }}
					  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
					  <Picker.Item label="Java" value="java" />
					  <Picker.Item label="JavaScript" value="js" />
					</Picker>
				</View>
	      </Wallpaper>
	    );
  }
}


