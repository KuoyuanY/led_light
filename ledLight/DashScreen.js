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
		      <View style={{flex: 3, marginTop:50}}>
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
		      <View style={{flex: 2, marginTop: 40, backgroundColor: 'rgba(255,255,255,0.1)'}}> 
		      		<Picker
						selectedValue={this.state.language}
					 
				    	onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
				    	<Picker.Item label="solid" value="solid"/>
						<Picker.Item label="bpm" value="bpm"/>
						<Picker.Item label="candy cane" value="candy cane"/>
						<Picker.Item label="confetti" value="confetti"/>
						<Picker.Item label="cyclon rainbow" value="cyclon rainbow"/>
						<Picker.Item label="dots" value="dots"/>
						<Picker.Item label="fire" value="fire"/>
						<Picker.Item label="glitter" value="glitter"/>
						<Picker.Item label="juggle" value="juggle"/>
						<Picker.Item label="lightning" value="lightning"/>
						<Picker.Item label="police all" value="police all"/>
						<Picker.Item label="police one" value="police one"/>
						<Picker.Item label="rainbow" value="rainbow"/>
						<Picker.Item label="rainbow with glitter" value="rainbow with glitter"/>
						<Picker.Item label="sinelon" value="sinelon"/>
						<Picker.Item label="twinkle" value="twinkle"/>
						<Picker.Item label="noise" value="noise"/>
						<Picker.Item label="ripple" value="ripple"/>

						</Picker>
			   </View>
			   <View style={{flex: 1}}> </View>
	      </Wallpaper>
	    );
  }
}


