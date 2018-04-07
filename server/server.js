'use strict';
const express = require('express');
const app = express();
const credentials = require('./credentials');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');
const topic = "bruh/porch/set";

var options = {
    keepalive: 60,
    reschedulePings: true,
    protocolId: 'MQTT',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    protocolVersion: 4,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    clean: true,
    port: 16370,
    resubscribe: true,
    username: credentials.username,
    password: credentials.password,
    queueQoSZero: true
}
var client = mqtt.connect(`mqtt://m14.cloudmqtt.com`, options);//"mqtt://m14.cloudmqtt.com");

//setting up client
client.on('connect', () => {//
    console.log("successfully connected to mqtt client");
});
client.on('reconnect', () => {//
    console.log("reconnectting to mqtt client");
});
client.on('close', () => {//
    console.log("mqtt client connection ended");
});
client.on('offline', ()=>{//
    console.log("mqtt client is offline");
});
client.on('error', (err) => {//
    console.log("an error occurred");
    console.log(err);
});

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.get('/', (req, res)=>{
    res.send("this is the api");
});

app.post('/set', (req, res) => {
    console.log(req.body);
    var message = `{"state":"${req.body.state}","color":{"r":${req.body.colorR},"g":${req.body.colorG},"b":${req.body.colorB}},"brightness":${req.body.brightness},"effect":"${req.body.effect}"}`;

    client.publish(topic, message, (err) => {//send command to arduino
        if(err){
            console.log(`client disconnecting`);
            res.send("an error has occurred");
        } else{
            console.log("successfully connected");
            if(req.body.switches === "yes"){//turn led on/off
                console.log(`successfully turned led ${req.body.state}`);
                res.send(`successfully turned led ${req.body.state}`);
            }else if(req.body.setCol === "yes"){//change color of led
                console.log(`successfully changed color of led`);
                res.send(`successfully changed color of led`);
            }else if(req.body.setBr === "yes"){//change brightness
                console.log(`successfully changed brightness of led`);
                res.send(`successfully changed brightness of led`);
            }else{//set effect
                console.log(`successfully set effect to ${req.body.effect}`);
                res.send(`successfully set effect to ${req.body.effect}`)
            }
        }
    });
});



var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});
