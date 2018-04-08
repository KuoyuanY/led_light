import React, {Component} from 'react';
import { Button, View, Text, Dimensions, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ColorWheel } from 'react-native-color-wheel';
import Wallpaper from './Wallpaper';

const ip = '10.104.169.224';
export default class LedScreen extends React.Component {



	constructor(props) {
    	super(props);
    	this.state = {effect: 'solid',
    				  colorR : 0,
    				  colorG : 0,
    				  colorB : 0,
    				  switch : "OFF"};

  	}

  	render() {
  		let convert = require('color-convert');
  		// let display = this.state.isShowingText ? this.props.text : ' ';

	    return (
	      <Wallpaper>
		      <View style={{flex: 3, marginTop:50}}>
		        <ColorWheel
		          initialColor="#FFFFFF"
		          onColorChange={color =>

					{if (color.h < 0) {
						let colour = convert.hsv.rgb(360-color.h*(-1), color.s, color.v);
						this.setState({colorR : colour[0],
									   colorG : colour[1],
									   colorB : colour[2]})
					} else {
						let colour = convert.hsv.rgb(color.h, color.s, color.v);
						this.setState({colorR : colour[0],
									   colorG : colour[1],
									   colorB : colour[2]})

					}}}
		          style={{width: Dimensions.get('window').width}}
		          thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />

		      </View>
		      <View style={{flex: 2, marginTop: 40, backgroundColor: 'rgba(255,255,255,0.1)'}}>
		      		<Picker
						selectedValue={this.state.effect}

				    	onValueChange={(itemValue, itemIndex) => this.setState({effect: itemValue})}>

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
                        <Picker.Item label="morning" value="morning"/>

						</Picker>
			   </View>
			   <TouchableOpacity onPress={() =>
			   		{let args = {};
				    args.state = "ON";
				    this.setState({switch : "ON"});
				    args.colorR = this.state.colorR;
				    args.colorG = this.state.colorG;
				    args.colorB = this.state.colorB;
				    args.brightness = 50;
				    args.effect = this.state.effect;
				    args.switches = "yes";
				    args.setCol = "yes";
				    args.setBr = "yes";

					//fetch('http://localhost:3000/set', {
                    fetch('http://' + ip + ':3000/set', {
					  method: 'POST',
					  headers: {
					    Accept: 'application/json',
					    'Content-Type': 'application/json',
					  },
					  body: JSON.stringify(
					    args
					  ),
					});}}
			   	>
            <View style={styles.buttonContainer}>
              <Text style= {styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
          	{if (this.state.switch == "OFF") {
          		this.setState({switch: "ON"});
          		let args = {};
				    args.state = "ON";
				    args.colorR = this.state.colorR;
				    args.colorG = this.state.colorG;
				    args.colorB = this.state.colorB;
				    args.brightness = 50;
				    args.effect = this.state.effect;
				    args.switches = "yes";
				    args.setCol = "yes";
				    args.setBr = "yes";

					//fetch('http://localhost:3000/set', {
                    fetch('http://' + ip + ':3000/set', {
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
          		this.setState({switch: "OFF"});
          		let args = {};
				    args.state = "OFF";
				    args.colorR = this.state.colorR;
				    args.colorG = this.state.colorG;
				    args.colorB = this.state.colorB;
				    args.brightness = 50;
				    args.effect = this.state.effect;
				    args.switches = "yes";
				    args.setCol = "yes";
				    args.setBr = "yes";

					//fetch('http://localhost:3000/set', {
                    fetch('http://' + ip + ':3000/set', {
					  method: 'POST',
					  headers: {
					    Accept: 'application/json',
					    'Content-Type': 'application/json',
					  },
					  body: JSON.stringify(
					    args
					  ),
					});
          	}}}>

          	<View style={styles.buttonContainer}>
              <Text style= {styles.buttonText}>Power</Text>
            </View>
          </TouchableOpacity>
		  <View style={{flex: 1}}> </View>
	      </Wallpaper>
	    );
  }
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
    marginLeft: 100,
    marginRight: 100,
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
